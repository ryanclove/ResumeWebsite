/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-sort-props */
import classNames from 'classnames';
import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { SectionId, testimonial } from '../../data/index';
import type { Testimonial } from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';

const Testimonials: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [bgIndex, setBgIndex] = useState<number>(0);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const { width } = useWindow();
  const { images = [], testimonials } = testimonial;

  const resolvedImages = useMemo(() => {
    return images.map(img => (typeof img === 'string' ? img : img.src));
  }, [images]);

  useEffect(() => {
    itemWidth.current = scrollContainer.current
      ? scrollContainer.current.offsetWidth
      : 0;
  }, [width]);

  // 🔁 Background slideshow (independent)
  useEffect(() => {
    if (!resolvedImages.length) return;

    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % resolvedImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [resolvedImages.length]);

  const goToIndex = useCallback(
    (index: number) => {
      if (!scrollContainer.current) return;

      scrollContainer.current.scrollTo({
        left: itemWidth.current * index,
        behavior: 'smooth',
      });

      setActiveIndex(index);
    },
    [],
  );

  const next = useCallback(() => {
    const nextIndex =
      activeIndex + 1 >= testimonials.length ? 0 : activeIndex + 1;

    goToIndex(nextIndex);
  }, [activeIndex, testimonials.length, goToIndex]);

  useInterval(next, 8000);

  if (!testimonials.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div className="relative flex w-full items-center justify-center px-4 py-16 md:py-24 lg:px-8 overflow-hidden isolate">

        {/* 🔥 Background Slideshow */}
        <div className="absolute inset-0 -z-10">
          {resolvedImages.map((img, index) => (
            <div
              key={index}
              className={classNames(
                'absolute inset-0 bg-cover bg-center transition-all duration-[4000ms]',
                index === bgIndex
                  ? 'opacity-70 scale-105'
                  : 'opacity-0 scale-100'
              )}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-900/70 p-6 shadow-lg">

            {/* Slides */}
            <div
              ref={scrollContainer}
              className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-hidden scroll-smooth">
              {testimonials.map((testimonialItem, index) => (
                <Testimonial
                  key={`${testimonialItem.name}-${index}`}
                  testimonial={testimonialItem}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-x-4">
              {testimonials.map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={`select-button-${index}`}
                    onClick={() => goToIndex(index)}
                    className={classNames(
                      'h-3 w-3 rounded-full bg-gray-300 transition-all duration-300 sm:h-4 sm:w-4',
                      isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-60',
                    )}
                  />
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
});

const Testimonial: FC<{ testimonial: Testimonial }> = memo(
  ({ testimonial: { text, name, image } }) => (
    <div className="flex w-full shrink-0 snap-start flex-col items-start gap-y-4 p-2 sm:flex-row sm:gap-x-6">
      {image ? (
        <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
          <QuoteIcon className="absolute -left-2 -top-2 h-4 w-4 stroke-black text-white" />
          <img
            className="h-full w-full rounded-full"
            src={image}
            alt={name}
          />
        </div>
      ) : (
        <QuoteIcon className="h-5 w-5 shrink-0 text-white sm:h-8 sm:w-8" />
      )}

      <div className="flex flex-col gap-y-4">
        <p className="prose prose-sm font-medium italic text-white drop-shadow-md sm:prose-base">
          {text}
        </p>
        <p className="text-xs italic text-white sm:text-sm md:text-base lg:text-lg">
          -- {name}
        </p>
      </div>
    </div>
  ),
);

Testimonials.displayName = 'Testimonials';
export default Testimonials;