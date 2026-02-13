/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-sort-props */
import {FC, memo, PropsWithChildren} from 'react';

import type {CollegeItem as CollegeItemType} from '../../../data/dataDef';
import CollegeItem from './CollegeItem';

interface CollegeSectionProps {
  title: string;
  items: CollegeItemType[]; // required
  className?: string;
  pt?: string;
  pb?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const CollegeSection: FC<PropsWithChildren<CollegeSectionProps>> = memo(
  ({title, items, className = '', pt = 'py-8', pb = 'pb-8', imageWidth = 128, imageHeight = 128}) => {
    return (
      <div className={`w-full bg-gray-800 dark:bg-gray-900 ${className}`}>
        <div className={`max-w-screen-lg mx-auto px-4 ${pt} ${pb} md:px-8 md:pt-12 md:pb-24`}>
          {/* Section Title */}
          <h2 className="text-xl font-bold uppercase text-white dark:text-white relative mb-6">
            {title}
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
          </h2>

          {/* Timeline items */}
          <div className="flex flex-col gap-y-6">
            {items.map((item, index) => (
              <CollegeItem key={index} item={item} imageWidth={imageWidth} imageHeight={imageHeight} />
            ))}
          </div>
        </div>
      </div>
    );
  },
);

CollegeSection.displayName = 'CollegeSection';
export default CollegeSection;
