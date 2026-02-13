/* eslint-disable object-curly-spacing */
import React, { FC, memo } from 'react';

import { education, experience, SectionId } from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';

const Resume: FC = memo(() => {
  return (
    <Section
      bgClassName="bg-gray-800 dark:bg-gray-900"
      paddingClassName="pt-0 pb-0 md:pt-12 md:pb-16"
      sectionId={SectionId.Resume}
    >
      <div className="flex flex-col divide-y-2 divide-neutral-300">

        {/* Coaching Experience */}
        <ResumeSection
          imageHeight={128}
          imageWidth={128}
          items={experience} // each item can have its own `image`
          title="Coaching Experience"
        />

        {/* Education */}
        <ResumeSection
          imageHeight={128}
          imageWidth={128}
          items={education} // each item can also have an image
          title="Education"
        />

      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
