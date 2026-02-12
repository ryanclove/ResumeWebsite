import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';

interface SectionProps {
  sectionId: SectionId;
  sectionTitle?: string;
  noPadding?: boolean; // removes default padding if true
  className?: string; // extra container classes
  bgClassName?: string; // optional background class
  textClassName?: string; // optional text color class
  paddingClassName?: string; // optional custom padding
}

const Section: FC<PropsWithChildren<SectionProps>> = memo(
  ({children, sectionId, noPadding = false, className, bgClassName, textClassName, paddingClassName}) => {
    // default padding if noPadding is false and no paddingClassName is provided
    const defaultPadding = !noPadding && !paddingClassName ? 'px-4 py-16 md:py-24 lg:px-8' : '';
    const appliedPadding = paddingClassName || defaultPadding;

    return (
      <section className={classNames(className, bgClassName, textClassName, appliedPadding)} id={sectionId}>
        <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
      </section>
    );
  },
);

Section.displayName = 'Section';
export default Section;
