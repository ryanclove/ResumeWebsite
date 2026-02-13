/* eslint-disable object-curly-spacing */
import React, {FC, memo} from 'react';

import {college, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import CollegeSection from './CollegeSection';

const CollegeCommit: FC = memo(() => {
  return (
    <Section
      bgClassName="bg-gray-800 dark:bg-gray-900"
      paddingClassName="pt-0 pb-0 md:pt-12 md:pb-16"
      sectionId={SectionId.College}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        {/* College Commitments */}
        <CollegeSection
          imageHeight={128}
          imageWidth={128}
          items={college} // each item can have its own `image`
          title="Players I have Coached with College Commitments"
        />
      </div>
    </Section>
  );
});

CollegeCommit.displayName = 'College Commitments';
export default CollegeCommit;
