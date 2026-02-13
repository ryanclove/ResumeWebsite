/* eslint-disable object-curly-spacing */
import Image from 'next/image';
import {FC, memo} from 'react';

import type {TimelineItem as TimelineItemType} from '../../../data/dataDef';

interface TimelineItemProps {
  item: TimelineItemType;
  imageWidth?: number;
  imageHeight?: number;
}

const TimelineItem: FC<TimelineItemProps> = memo(({item, imageWidth = 128, imageHeight = 128}) => {
  const {title, date, location, content, image} = item;

  return (
    <div className="flex flex-col md:flex-row md:gap-x-6 pb-8 last:pb-0 items-center md:items-start text-center md:text-left">
      {/* Image */}
      {image && (
        <div className="mb-2 md:mb-0 md:flex-shrink-0">
          <Image
            alt={String(title ?? '')}
            className="rounded-lg object-cover"
            height={imageHeight}
            src={image}
            width={imageWidth}
          />
        </div>
      )}

      {/* Timeline content */}
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
        <div className="text-sm sm:text-base mt-1">{content}</div>
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
