import Image from 'next/image';
import {FC, memo, PropsWithChildren} from 'react';

import type {TimelineItem as TimelineItemType} from '../../../data/dataDef';
import TimelineItem from './TimelineItem';

interface ResumeSectionProps {
  title: string;
  items?: TimelineItemType[]; // the timeline items for this section
  className?: string;
  pt?: string;
  pb?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const ResumeSection: FC<PropsWithChildren<ResumeSectionProps>> = memo(
  ({title, items, className = '', pt = 'py-8', pb = 'pb-8', imageWidth = 64, imageHeight = 64}) => {
    return (
      <div className={`w-full bg-gray-800 dark:bg-gray-900 ${className}`}>
        <div
          className={`max-w-screen-lg mx-auto px-4 ${pt} ${pb} md:px-8 md:pt-12 md:pb-24 grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-y-8`}>
          {/* Left column: section title + stacked images */}
          <div className="col-span-1 flex flex-col items-center md:items-start gap-y-4">
            {/* Section title */}
            <h2 className="text-xl font-bold uppercase text-white dark:text-white relative">
              {title}
              <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
            </h2>

            {/* Stack images for each timeline item */}
            {items?.map((item, index) =>
              item.image ? (
                <div className="w-full flex justify-center md:justify-start" key={index}>
                  <Image
                    alt={String(item.title ?? '')}
                    className="rounded-lg object-cover mb-2"
                    height={imageHeight}
                    src={item.image}
                    width={imageWidth}
                  />
                </div>
              ) : null,
            )}
          </div>

          {/* Right column: timeline item text */}
          <div className="col-span-1 md:col-span-3 flex flex-col space-y-4 text-white dark:text-white">
            {items?.map((item, index) => (
              <TimelineItem
                image={undefined} // we render images in left column
                item={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
);

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
