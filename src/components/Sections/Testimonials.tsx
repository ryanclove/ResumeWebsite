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

// ─── helpers ────────────────────────────────────────────────────────────────

const PARENT_KEYWORDS = ['mother', 'father', 'parent', 'mom', 'dad'];

function isParent(name: string): boolean {
  const lower = name.toLowerCase();
  return PARENT_KEYWORDS.some(kw => lower.includes(kw));
}

// ─── single carousel ────────────────────────────────────────────────────────

interface CarouselProps {
  label: string;
  accent: string; // tailwind text color class for the label
  items: Testimonial[];
  autoDelay: number; // ms between auto-advance
}

const Carousel: FC<CarouselProps> = memo(({ label, accent, items, autoDelay }) => {
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

  const next = useCallback(() => {
    goTo((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, goTo]);

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

  if (!items.length) return null;

  return (
    <div className="flex flex-col gap-4 flex-1 min-w-0">
      {/* Label */}
      <div className={classNames('font-label text-xs uppercase tracking-[0.25em] font-bold', accent)}>
        {label}
      </div>

      {/* Card */}
      <div className="flex flex-col gap-4 rounded-xl bg-gray-900/70 backdrop-blur-sm p-5 shadow-lg flex-1">
        {/* Slides */}
        <div
          ref={scrollContainer}
          className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-hidden scroll-smooth flex-1"
        >
          {items.map((item, index) => (
            <CarouselSlide key={`${item.name}-${index}`} testimonial={item} />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-x-3 mt-auto pt-2 border-t border-white/10">
          <button
            aria-label="Previous"
            className="rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white transition focus:outline-none"
            onClick={() => handleManual('prev')}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>

          <div className="flex gap-x-2 items-center">
            {items.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to ${index + 1}`}
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

// ─── single slide ────────────────────────────────────────────────────────────

const CarouselSlide: FC<{ testimonial: Testimonial }> = memo(({ testimonial: { text, name, image } }) => (
  <div className="flex w-full shrink-0 snap-start flex-col gap-y-4 p-1">
    <div className="flex items-start gap-x-3">
      {image ? (
        <div className="relative h-10 w-10 shrink-0">
          <QuoteIcon className="absolute -left-1.5 -top-1.5 h-3.5 w-3.5 stroke-black text-white" />
          <img className="h-full w-full rounded-full object-cover" src={image} alt={name} />
        </div>
      ) : (
        <QuoteIcon className="h-6 w-6 shrink-0 text-white/60 mt-0.5" />
      )}
      <p className="text-sm font-semibold text-white/90 leading-snug">{name}</p>
    </div>
    <p className="text-sm italic text-white/75 leading-relaxed line-clamp-6 md:line-clamp-none">{text}</p>
  </div>
));

CarouselSlide.displayName = 'CarouselSlide';

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

  const playerTestimonials = useMemo(
    () => testimonials.filter(t => !isParent(t.name)),
    [testimonials],
  );

  const parentTestimonials = useMemo(
    () => testimonials.filter(t => isParent(t.name)),
    [testimonials],
  );

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
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
            <Carousel
              label="🏐 From Players"
              accent="text-primary"
              items={playerTestimonials}
              autoDelay={8000}
            />

            {/* Divider — visible only on md+ */}
            <div className="hidden md:block w-px bg-white/10 self-stretch" />

            <Carousel
              label="👨‍👩‍👧 From Parents"
              accent="text-secondary"
              items={parentTestimonials}
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