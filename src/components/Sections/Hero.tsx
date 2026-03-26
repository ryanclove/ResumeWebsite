/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-sort-props */
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { FC, memo } from 'react';

import { heroData, SectionId } from '../../data/index';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const { imageSrc, name, description } = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative min-h-screen flex items-end pt-32 pb-24 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            alt={`${name}-image`}
            src={imageSrc}
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">

            <span className="font-label text-secondary uppercase tracking-[0.4em] mb-4 block">
              Elite Coaching Performance
            </span>

            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8 text-on-surface">
              COACH <br />
              <span className="text-primary">{name.split(' ').slice(1).join(' ')}</span>
            </h1>

            <div className="text-lg md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
              {description}
            </div>

            {/* Socials */}
            <div className="mt-8 flex gap-x-4 text-on-surface">
              <Socials />
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <a
                href={`/#${SectionId.Contact}`}
                className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-md font-bold text-lg shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
              >
                Contact Me
              </a>

              <div className="flex items-center gap-4 text-on-surface font-label uppercase tracking-widest text-sm">
                <span className="w-12 h-[1px] bg-outline-variant"></span>
                Scroll to Explore
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center z-10">
          <a
            className="rounded-full bg-surface p-2 ring-1 ring-outline hover:scale-110 transition"
            href={`/#${SectionId.About}`}
          >
            <ChevronDownIcon className="h-6 w-6 text-on-surface" />
          </a>
        </div>

      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;