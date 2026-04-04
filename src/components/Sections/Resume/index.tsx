/* eslint-disable object-curly-spacing */
import { FC, memo } from 'react';

import { education, experience, playing, SectionId } from '../../../data/index';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';

const Resume: FC = memo(() => {
  return (
    <Section
      bgClassName="bg-surface-container-medium relative"
      paddingClassName="pt-16 pb-16"
      sectionId={SectionId.Resume}
    >
      {/* Gradient bleed from About */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-surface-container-low to-transparent pointer-events-none z-10" />

      {/* Gradient bleed into Medals */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-surface-container-low pointer-events-none z-10" />
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