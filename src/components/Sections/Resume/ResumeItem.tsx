/* eslint-disable react/jsx-sort-props */
/* eslint-disable object-curly-spacing */
import Image from 'next/image';
import { FC, memo } from 'react';
import type { TimelineItem as ResumeItemType } from '../../../data/dataDef';

interface ResumeItemProps {
  item: ResumeItemType;
  onClick: () => void;
}

const ResumeItem: FC<ResumeItemProps> = memo(({ item, onClick }) => {
  const { title, location, date, image, size } = item;

  const isFeatured = size === 'large' || size === 'wide';

  const imageClasses = isFeatured
    ? 'object-cover scale-105'
    : 'object-cover grayscale group-hover:grayscale-0 transition-all duration-700';

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-surface-container rounded-xl overflow-hidden relative group hover:scale-[1.02] transition-all duration-300 w-full h-full"
    >
      {image && (
        <Image
          src={image}
          alt={String(title)}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 25vw"
          className={imageClasses}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80" />

      {/* Text */}
      <div className="absolute bottom-6 left-6">
        <h5 className={`font-headline font-bold ${size === 'large' ? 'text-3xl' : 'text-xl'}`}>
          {title}
        </h5>

        {location && (
          <p className="text-xs uppercase tracking-widest text-secondary">{location}</p>
        )}

        {date && (
          <p className="text-xs uppercase tracking-widest text-surface-tint">{date}</p>
        )}
      </div>
    </div>
  );
});

ResumeItem.displayName = 'ResumeItem';
export default ResumeItem;