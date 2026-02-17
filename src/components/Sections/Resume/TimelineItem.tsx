/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable object-curly-spacing */
import Image from 'next/image';
import { FC, memo, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import type { TimelineItem as TimelineItemType } from '../../../data/dataDef';

interface TimelineItemProps {
  item: TimelineItemType;
  imageWidth?: number;
  imageHeight?: number;
}

const TimelineItem: FC<TimelineItemProps> = memo(
  ({ item, imageWidth = 128, imageHeight = 128 }) => {
    const { title, date, location, content, image, alwaysOpen } = item;

    const [isOpen, setIsOpen] = useState(alwaysOpen ?? false);

    const canToggle = !alwaysOpen;

    return (
      <div className="flex flex-col md:flex-row md:gap-x-6 pb-8 last:pb-0 items-center md:items-start text-center md:text-left">

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

        <div className="flex flex-col w-full">

          {/* Header */}
          <button
            onClick={() => canToggle && setIsOpen(!isOpen)}
            className={`flex w-full items-center justify-between text-left ${canToggle ? 'cursor-pointer' : 'cursor-default'
              }`}
          >
            <h2 className="text-xl font-bold">{title}</h2>

            {canToggle &&
              (isOpen ? (
                <ChevronUpIcon className="h-5 w-5" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" />
              ))}
          </button>

          <div className="flex items-center justify-center gap-x-2 md:justify-start mt-1">
            <span className="flex-1 text-sm font-medium italic sm:flex-none">
              {location}
            </span>
            <span>•</span>
            <span className="flex-1 text-sm sm:flex-none">{date}</span>
          </div>

          {(alwaysOpen || isOpen) && (
            <div className="text-sm sm:text-base mt-2">
              {content}
            </div>
          )}
        </div>
      </div>
    );
  }
);

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
