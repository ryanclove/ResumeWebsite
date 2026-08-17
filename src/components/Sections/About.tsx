/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-sort-props */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { FC, memo, useCallback, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { aboutData, SectionId } from '../../data/index';
import useInterval from '../../hooks/useInterval';
import Section from '../Layout/Section';

const quotes = [
  "Me and my homies hate free balls",
  "Screw the ball, watch people",
  "Volleyball wasn't built in a day",
  "Free balls are boring and stupid",
  "Nobody came out of the womb knowing how to play volleyball",
];

const AUTO_DELAY = 5000;
const PAUSE_AFTER_MANUAL = 12000;

const QuoteSlideshow: FC = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % quotes.length),
    [],
  );
  const prev = useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length),
    [],
  );

  const handleManual = useCallback((action: 'prev' | 'next' | number) => {
    setIsPaused(true);
    if (action === 'prev') prev();
    else if (action === 'next') next();
    else setCurrentIndex(action);
    setTimeout(() => setIsPaused(false), PAUSE_AFTER_MANUAL);
  }, [prev, next]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleManual('next'),
    onSwipedRight: () => handleManual('prev'),
    trackMouse: true,
  });

  useInterval(next, isPaused ? null : AUTO_DELAY);

  return (
    <div
      {...handlers}
      className="absolute -bottom-8 -right-8 bg-surface-container-highest p-2 sm:p-6 border-t border-outline-variant/20 shadow-2xl w-64 sm:w-80 flex flex-col"
    >
      <div className="relative h-12 sm:h-12 overflow-hidden">
        {quotes.map((quote, idx) => {
          const offset = idx - currentIndex;
          return (
            <p
              key={idx}
              aria-hidden={idx !== currentIndex}
              className="absolute inset-0 flex flex-col justify-center text-center text-sm sm:text-base italic text-on-surface-variant transition-all duration-500 ease-out"
              style={{
                transform: `translateX(${offset * 100}%)`,
                opacity: idx === currentIndex ? 1 : 0,
              }}
            >
              "{quote}"
            </p>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-1">
        <button
          aria-label="Previous quote"
          className="rounded-full p-1 text-on-surface-variant hover:bg-outline-variant/20 hover:text-on-surface transition focus:outline-none"
          onClick={() => handleManual('prev')}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>

        <div className="flex justify-center gap-1">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to quote ${idx + 1}`}
              onClick={() => handleManual(idx)}
              className={`h-1 w-2 rounded-full transition-all ${idx === currentIndex ? 'bg-primary' : 'bg-outline-variant'
                }`}
            />
          ))}
        </div>

        <button
          aria-label="Next quote"
          className="rounded-full p-1 text-on-surface-variant hover:bg-outline-variant/20 hover:text-on-surface transition focus:outline-none"
          onClick={() => handleManual('next')}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
});

const About: FC = memo(() => {
  const { profileImageSrc, description, aboutItems } = aboutData;

  return (
    <Section sectionId={SectionId.About} className="py-32 relative bg-surface-container-low">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* LEFT: Image + Quotes */}
          <div className="w-full lg:w-1/2 relative">

            {/* Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

            {/* Image */}
            {profileImageSrc && (
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={typeof profileImageSrc === 'string' ? profileImageSrc : profileImageSrc.src}
                  alt="Ryan Coaching"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}

            {/* Quotes Slideshow */}
            <QuoteSlideshow />
          </div>

          {/* RIGHT: Content */}
          <div className="w-full lg:w-1/2">

            {/* Title */}
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Teaching{' '}
              <span className="text-tertiary">
                Volleyball Excellence.
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 sm:space-y-6 text-on-surface-variant text-lg leading-relaxed mb-8">
              <p>{description}</p>
            </div>

            {/* Data-driven info grid (wider fixed boxes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
              {aboutItems.map(({ label, text, Icon }, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-surface-container-high p-4 rounded-lg border border-outline-variant/10 w-full min-h-[80px]"
                >
                  {Icon && <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />}
                  <div className="text-sm">
                    <div className="font-bold text-white">{label}</div>
                    <div className="text-on-surface-variant">{text}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      {/* Gradient bleed into Resume */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-surface-container-medium pointer-events-none" />
    </Section>
  );
});

About.displayName = 'About';
export default About;