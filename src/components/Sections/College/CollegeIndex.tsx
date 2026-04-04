/* eslint-disable react/jsx-sort-props */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-curly-spacing */
import { FC, memo } from 'react';
import { college, SectionId } from '../../../data/index';
import Section from '../../Layout/Section';
import CollegeSection from './CollegeSection';

const CollegeCommit: FC = memo(() => {
  // If only one player, make it 'large' so it spans multiple columns
  const updatedCollege = college.map((player) => ({
    ...player,
    //large: college.length === 1, // large if only 1 player
    highlightNumber: player.highlightNumber || undefined, // optional
  }));

  return (
    <Section
      bgClassName="bg-surface-container-medium relative"
      paddingClassName="pt-16 pb-16 md:pt-20 md:pb-20"
      sectionId={SectionId.College}
    >
      {/* Gradient bleed from Medals */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-surface-container-low to-transparent pointer-events-none z-10" />
      
      <CollegeSection
        items={updatedCollege}
        title="My College Players."
        className=""
      />
    </Section>
  );
});

CollegeCommit.displayName = 'College Commitments';
export default CollegeCommit;