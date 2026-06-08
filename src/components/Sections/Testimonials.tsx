/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-sort-props */
import classNames from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { SectionId, testimonial } from '../../data/index';
import type { Testimonial } from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';

// ─── helpers ─────────────────────────────────────────────────────────────────

/**
 * Sort 1st by Year
 * Then Sort by text length descending, then chunk into slides:
 * - ≥ soloThreshold chars → solo slide
 * - < soloThreshold chars → paired (2 per slide)
 * - < tripleThreshold chars → triple (3 per slide)
 */
function lengthAwareSlides(
  items: Testimonial[],
  soloThreshold = 300,
): Testimonial[][] {
  const getYear = (t: Testimonial) =>
    typeof t.year === 'number' ? t.year : parseInt(t.year ?? '0', 10);

  // Group by year
  const byYear = new Map<number, Testimonial[]>();

  for (const item of items) {
    const year = getYear(item);
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year)!.push(item);
  }

  const years = [...byYear.keys()].sort((a, b) => b - a);

  const slides: Testimonial[][] = [];

  for (const year of years) {
    const yearItems = [...byYear.get(year)!];

    // Keep your “long = solo” rule
    const long: Testimonial[] = [];
    const normal: Testimonial[] = [];

    for (const item of yearItems) {
      if (item.text.length >= soloThreshold) {
        long.push(item);
      } else {
        normal.push(item);
      }
    }

    // Optional: keep stable ordering (longest first within each group)
    long.sort((a, b) => b.text.length - a.text.length);
    normal.sort((a, b) => b.text.length - a.text.length);

    // Long testimonials → solo slides
    for (const item of long) {
      slides.push([item]);
    }

    // Normal testimonials → pairs, last remainder → triple if needed
    let i = 0;
    const n = normal.length;

    while (i < n) {
      const remaining = n - i;

      // If exactly 3 left, make one triple slide
      if (remaining === 3) {
        slides.push(normal.slice(i, i + 3));
        break;
      }

      // Otherwise use pairs
      slides.push(normal.slice(i, i + 2));
      i += 2;
    }
  }

  return slides;
}
/** Wrap each item in its own slide (for the parents carousel). */
const singleSlides = (items: Testimonial[]): Testimonial[][] => items.map(t => [t]);

// ─── single carousel ─────────────────────────────────────────────────────────

interface CarouselProps {
  label: string;
  accent: string;
  slides: Testimonial[][];
  autoDelay: number;
}

const Carousel: FC<CarouselProps> = memo(({ label, accent, slides, autoDelay }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const itemWidth = useRef(0);
  const { width } = useWindow();

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  const goTo = useCallback((index: number) => {
    if (!scrollContainer.current) return;
    scrollContainer.current.scrollTo({ left: itemWidth.current * index, behavior: 'smooth' });
    setActiveIndex(index);
  }, []);

  const next = useCallback(() => goTo((activeIndex + 1) % slides.length), [activeIndex, slides.length, goTo]);
  const prev = useCallback(() => goTo((activeIndex - 1 + slides.length) % slides.length), [activeIndex, slides.length, goTo]);

  const handleManual = useCallback(
    (action: 'prev' | 'next' | number) => {
      setIsPaused(true);
      if (action === 'prev') prev();
      else if (action === 'next') next();
      else goTo(action);
      setTimeout(() => setIsPaused(false), 12000);
    },
    [prev, next, goTo],
  );

  useInterval(next, isPaused ? null : autoDelay);

  if (!slides.length) return null;

  // "X–Y of Z" count badge
  const totalTestimonials = slides.reduce((sum, s) => sum + s.length, 0);
  const firstOnSlide = slides.slice(0, activeIndex).reduce((sum, s) => sum + s.length, 0) + 1;
  const lastOnSlide = firstOnSlide + slides[activeIndex].length - 1;
  const countLabel =
    firstOnSlide === lastOnSlide
      ? `${firstOnSlide} of ${totalTestimonials}`
      : `${firstOnSlide}–${lastOnSlide} of ${totalTestimonials}`;

  return (
    <div className="flex flex-col gap-3 flex-1 min-w-0">
      {/* Label */}
      <div className={classNames('font-label text-xs uppercase tracking-[0.25em] font-bold', accent)}>
        {label}
      </div>

      {/* Card */}
      <div className="flex flex-col rounded-xl bg-gray-900/70 backdrop-blur-sm p-5 shadow-lg flex-1 min-h-0 max-h-90">
        <div
          ref={scrollContainer}
          className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-hidden scroll-smooth flex-1 min-h-0"
        >
          {slides.map((chunk, slideIndex) => (
            <CarouselSlide key={slideIndex} testimonials={chunk} />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-x-2 pt-3 mt-3 border-t border-white/10">
          <button
            aria-label="Previous"
            className="rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white transition focus:outline-none"
            onClick={() => handleManual('prev')}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>

          {/* Dots — collapse to text counter if there are too many slides */}
          {slides.length <= 12 ? (
            <div className="flex gap-x-1.5 items-center flex-wrap justify-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => handleManual(index)}
                  className={classNames(
                    'rounded-full transition-all duration-300',
                    index === activeIndex
                      ? 'h-2 w-4 bg-white opacity-100'
                      : 'h-2 w-2 bg-gray-500 opacity-60 hover:opacity-80',
                  )}
                />
              ))}
            </div>
          ) : (
            <span className="text-xs text-gray-400 tabular-nums">
              slide {activeIndex + 1} / {slides.length}
            </span>
          )}

          {/* Count badge */}
          <span className="text-xs text-gray-500 tabular-nums whitespace-nowrap">
            {countLabel}
          </span>

          <button
            aria-label="Next"
            className="rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white transition focus:outline-none"
            onClick={() => handleManual('next')}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
});

Carousel.displayName = 'Carousel';

// ─── single slide (1 or 2 testimonials stacked) ──────────────────────────────

const CarouselSlide: FC<{ testimonials: Testimonial[] }> = memo(({ testimonials }) => (
  <div
    className="flex w-full shrink-0 snap-start flex-col p-1 gap-y-3 justify-center"
  >
    {testimonials.map((t, i) => (
      <TestimonialCard
        key={`${t.name}-${i}`}
        testimonial={t}
        compact={testimonials.length > 1}
      />
    ))}
  </div>
));

CarouselSlide.displayName = 'CarouselSlide';

// ─── individual testimonial card ─────────────────────────────────────────────

const TestimonialCard: FC<{ testimonial: Testimonial; compact: boolean }> =
  memo(
    ({ testimonial: { text, name, image, year, position, age, type }, compact }) => (
      <div
        className={classNames(
          'flex flex-col gap-y-2',
          compact && 'border-b border-white/10 pb-3 last:border-0 last:pb-0',
        )}
      >
        <div className="flex items-center gap-x-2">
          {image ? (
            <div className="relative h-9 w-9 shrink-0">
              <QuoteIcon className="absolute -left-1.5 -top-1.5 h-3 w-3 stroke-black text-white" />
              <img className="h-full w-full rounded-full object-cover" src={image} alt={name} />
            </div>
          ) : (
            <QuoteIcon className="h-4 w-4 shrink-0 text-white/60" />
          )}
          <div className="flex flex-col gap-y-1.5">
            <p className="text-sm font-semibold text-white/90 leading-none">{name}</p>
            {(age || position || year) && (
              <div className="flex flex-wrap items-center gap-x-2 text-xs leading-none">
                {position && <span className="text-primary">{position}</span>}
                {age && (
                  <span className="text-tertiary">
                    {type === 'parent' ? `Parent of Former ${age}s Player` : `Former ${age}s Player`}
                  </span>
                )}
                {year && <span className="text-white/60">{year}</span>}
              </div>
            )}
          </div>
        </div>

        {/* Quote — generous height for pairs, uncapped for solos */}
        <div className={classNames(
          'overflow-y-auto no-scrollbar pr-1',
          compact ? 'max-h-32 md:max-h-40' : 'max-h-60 md:max-h-none'
        )}>
          <p className="text-sm italic text-white/75 leading-relaxed">{text}</p>
        </div>
      </div>
    ),
  );

TestimonialCard.displayName = 'TestimonialCard';

// ─── background slideshow ────────────────────────────────────────────────────

const BackgroundSlideshow: FC<{ images: string[] }> = memo(({ images }) => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const id = setInterval(() => setBgIndex(prev => (prev + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images]);

  return (
    <div className="absolute inset-0 -z-10">
      {images.map((img, index) => (
        <div
          key={index}
          className={classNames(
            'absolute inset-0 bg-cover bg-center transition-all duration-[4000ms]',
            index === bgIndex ? 'opacity-70 scale-105' : 'opacity-0 scale-100',
          )}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
    </div>
  );
});

BackgroundSlideshow.displayName = 'BackgroundSlideshow';

// ─── main component ──────────────────────────────────────────────────────────

const Testimonials: FC = memo(() => {
  const { images = [], testimonials } = testimonial;

  const resolvedImages = useMemo(
    () => images.map(img => (typeof img === 'string' ? img : img.src)),
    [images],
  );

  const [shuffledImages, setShuffledImages] = useState<string[]>(resolvedImages);

  useEffect(() => {
    if (!resolvedImages.length) return;
    const shuffled = [...resolvedImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledImages(shuffled);
  }, [resolvedImages]);

  const playerTestimonials = useMemo(() => testimonials.filter(t => t.type === 'player'), [testimonials]);
  const parentTestimonials = useMemo(() => testimonials.filter(t => t.type === 'parent'), [testimonials]);

  // Players: long quotes solo, short quotes paired. Parents: always solo.
  const playerSlides = useMemo(() => lengthAwareSlides(playerTestimonials, 300), [playerTestimonials]);
  const parentSlides = useMemo(() => singleSlides(parentTestimonials), [parentTestimonials]);

  if (!testimonials.length) return null;

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div className="relative flex w-full flex-col items-center justify-center px-4 py-16 md:py-24 lg:px-8 overflow-hidden isolate">
        <BackgroundSlideshow images={shuffledImages} />

        <div className="z-10 w-full max-w-screen-lg">
          {/* Section heading */}
          <div className="text-center mb-8">
            <span className="font-label text-xs uppercase tracking-[0.4em] text-gray-400">
              What people say
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-white mt-2">
              Testimonials
            </h2>
          </div>

          {/* Side-by-side carousels */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:h-100 items-stretch">
            <Carousel
              label="🏐 From Players"
              accent="text-primary"
              slides={playerSlides}
              autoDelay={8000}
            />

            <div className="hidden md:block w-px bg-white/10 self-stretch" />

            <Carousel
              label="👨‍👩‍👧 From Parents"
              accent="text-secondary"
              slides={parentSlides}
              autoDelay={8000}
            />
          </div>

          {/* Count badges */}
          <div className="flex justify-center gap-6 mt-5 text-xs text-gray-500">
            <span>{playerTestimonials.length} player testimonials</span>
            <span>·</span>
            <span>{parentTestimonials.length} parent testimonials</span>
          </div>
        </div>
      </div>
    </Section>
  );
});

Testimonials.displayName = 'Testimonials';
export default Testimonials;