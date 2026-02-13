import Image, {StaticImageData} from 'next/image';
import {FC, memo} from 'react';

import type {TimelineItem as TimelineItemType} from '../../../data/dataDef';

interface TimelineItemProps {
  item: TimelineItemType;
  image?: string | StaticImageData; // optional image for this timeline item
  imageWidth?: number;
  imageHeight?: number;
}

const TimelineItem: FC<TimelineItemProps> = memo(({item, image, imageWidth = 64, imageHeight = 64}) => {
  const {title, date, location, content} = item;

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left md:flex-row md:gap-x-4">
      {/* Optional image */}
      {image && (
        <div className="mb-2 md:mb-0 md:flex-shrink-0">
          <Image
            alt={String(title ?? '')} // <-- ensure alt is always a string
            className="rounded-lg object-cover"
            height={imageHeight}
            src={image}
            width={imageWidth}
          />
        </div>
      )}

      {/* Text content */}
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
