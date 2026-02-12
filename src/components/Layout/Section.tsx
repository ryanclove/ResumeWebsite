import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';

interface SectionProps {
  sectionId: SectionId;
  sectionTitle?: string;
  noPadding?: boolean;
  className?: string;
  bgClassName?: string; // optional background class
  textClassName?: string; // optional text color class
}

const Section: FC<PropsWithChildren<SectionProps>> = memo(
  ({children, sectionId, noPadding = false, className, bgClassName, textClassName}) => {
    return (
      <section
        className={classNames(className, bgClassName, textClassName, {'px-4 py-16 md:py-24 lg:px-8': !noPadding})}
        id={sectionId}>
        <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
      </section>
    );
  },
);

Section.displayName = 'Section';
export default Section;
