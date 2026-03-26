/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-sort-props */
import Image from 'next/image';
import { FC, memo, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { aboutData, SectionId } from '../../data/index';
import Section from '../Layout/Section';

const quotes = [
  "Me and my homies hate free balls",
  "Screw the ball, watch people.",
];

const QuoteSlideshow: FC = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % quotes.length),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length),
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      {...handlers}
      className="absolute -bottom-8 -right-8 bg-surface-container-highest p-4 sm:p-6 border-t border-outline-variant/20 shadow-2xl max-w-xs h-24"
    >
      {quotes.map((quote, idx) => (
        <p
          key={idx}
          className={`text-sm sm:text-base italic text-on-surface-variant transition-opacity duration-500 ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0 absolute'
          }`}
        >
          "{quote}"
        </p>
      ))}
      <div className="flex justify-center mt-2 gap-1">
        {quotes.map((_, idx) => (
          <span
            key={idx}
            className={`h-1 w-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-primary' : 'bg-outline-variant'
            }`}
          />
        ))}
      </div>
    </div>
  );
});

const About: FC = memo(() => {
  const { profileImageSrc, description, aboutItems } = aboutData;

  return (
    <Section sectionId={SectionId.About} className="py-32 overflow-hidden">
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
    </Section>
  );
});

About.displayName = 'About';
export default About;