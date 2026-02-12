import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
// import { SkillGroup } from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section
      bgClassName="bg-gray-800 dark:bg-gray-900"
      paddingClassName="pt-4 pb-0 md:pt-12 md:pb-16"
      sectionId={SectionId.Resume} // slimmer top and bottom padding
    >
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Coaching Experience">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>

        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>

        {/*
        <ResumeSection title="Skills">
          <p className="pb-8">
            Here you can show a snapshot of your skills to show off to employers
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
        */}
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
