/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable object-curly-spacing */
import React, { FC, memo, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import { education, experience, playing, SectionId } from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';

const Resume: FC = memo(() => {
  const [openSections, setOpenSections] = useState({
    coaching: true,
    playing: false,
    education: false,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Section
      bgClassName="bg-gray-800 dark:bg-gray-900"
      paddingClassName="pt-0 pb-0 md:pt-12 md:pb-16"
      sectionId={SectionId.Resume}
    >
      <div className="flex flex-col divide-y-2 divide-neutral-300">

        {/* Coaching Experience */}
        <div className="py-6">
          <button
            onClick={() => toggleSection('coaching')}
            className="flex w-full items-center justify-between text-left"
          >
            <h2 className="text-2xl font-bold text-white">
              Coaching Experience
            </h2>
            {openSections.coaching ? (
              <ChevronUpIcon className="h-6 w-6 text-white" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-white" />
            )}
          </button>

          {openSections.coaching && (
            <ResumeSection
              imageHeight={128}
              imageWidth={128}
              items={experience}
              title=""
            />
          )}
        </div>

        {/* Playing Experience */}
        <div className="py-6">
          <button
            onClick={() => toggleSection('playing')}
            className="flex w-full items-center justify-between text-left"
          >
            <h2 className="text-2xl font-bold text-white">
              Playing Experience
            </h2>
            {openSections.playing ? (
              <ChevronUpIcon className="h-6 w-6 text-white" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-white" />
            )}
          </button>

          {openSections.playing && (
            <ResumeSection
              imageHeight={128}
              imageWidth={128}
              items={playing}
              title=""
            />
          )}
        </div>

        {/* Education */}
        <div className="py-6">
          <button
            onClick={() => toggleSection('education')}
            className="flex w-full items-center justify-between text-left"
          >
            <h2 className="text-2xl font-bold text-white">
              Education
            </h2>
            {openSections.education ? (
              <ChevronUpIcon className="h-6 w-6 text-white" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-white" />
            )}
          </button>

          {openSections.education && (
            <ResumeSection
              imageHeight={128}
              imageWidth={128}
              items={education}
              title=""
            />
          )}
        </div>

      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
