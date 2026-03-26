/* eslint-disable react/jsx-sort-props */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-curly-spacing */
import Image from 'next/image';
import {FC, memo} from 'react';
import type {CollegeItem as CollegeItemType} from '../../../data/dataDef';

interface CollegeItemProps {
  item: CollegeItemType;
}

const CollegeItem: FC<CollegeItemProps> = memo(({item}) => {
  const {title, date, location, image, highlightNumber, large} = item;

  // Conditional classes for larger/bento items
  const gridSpanClass = large ? 'md:col-span-2 md:row-span-2' : '';
  const imageClass = large
    ? 'w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700'
    : 'w-full h-full object-cover';

  return (
    <div className={`${gridSpanClass} bg-surface-container rounded-xl overflow-hidden relative group`}>
      {image && (
        <Image
          alt={typeof title === 'string' ? title : 'College item'}
          className={imageClass}
          src={image}
          width={800}
          height={800}
        />
      )}

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80"></div>

      {/* Text overlay */}
      <div className="absolute bottom-8 left-8 text-left">
        {highlightNumber && (
          <div className="text-6xl font-headline font-black text-on-surface">{highlightNumber}</div>
        )}
        <h5 className={`font-headline ${large ? 'text-3xl' : 'text-xl'} font-black`}>
          {title}
        </h5>
        {location && (
          <p className="font-label text-secondary text-xs uppercase tracking-widest">
            {location}
          </p>
        )}
        {date && (
          <p className="font-label text-surface-tint text-xs uppercase tracking-widest">
            {date}
          </p>
        )}
      </div>
    </div>
  );
});

CollegeItem.displayName = 'CollegeItem';
export default CollegeItem;