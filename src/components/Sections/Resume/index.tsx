//import Image from 'next/image';
import React, {FC, memo} from 'react';

import {education, experience, SectionId} from '../../../data/data';
//import viennalogo from '../../../images/viennalogo.png';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  //const imageStyle = useMemo(() => ({objectFit: 'cover' as const}), []);

  return (
    <Section
      bgClassName="bg-gray-800 dark:bg-gray-900"
      paddingClassName="pt-0 pb-0 md:pt-12 md:pb-16"
      sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        {/* Coaching Experience */}
        <ResumeSection
          imageHeight={64}
          imageWidth={64}
          items={experience} // each item has its own `image` property
          title="Coaching Experience">
          <div className="flex flex-col gap-y-4 mt-4">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          <div className="flex flex-col gap-y-4 mt-4">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
