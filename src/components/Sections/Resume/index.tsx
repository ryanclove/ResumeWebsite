/* eslint-disable object-curly-spacing */
import { FC, memo } from 'react';

import { education, experience, playing, SectionId } from '../../../data/index';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';

const Resume: FC = memo(() => {
  return (
    <Section
      bgClassName="bg-surface-container-medium"
      paddingClassName="pt-16 pb-16"
      sectionId={SectionId.Resume}
    >
      <ResumeSection
        title="Coaching Experience"
        items={experience}
        variant="featured"
        defaultOpen={true} // open by default
      />

      <ResumeSection
        title="Playing Experience"
        items={playing}
        variant="grid"
        defaultOpen={false} // closed by default
      />

      <ResumeSection
        title="Education"
        items={education}
        variant="grid"
        defaultOpen={false} // closed by default
      />
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;