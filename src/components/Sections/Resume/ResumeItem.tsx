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

  // Inner padding for different sizes
  const paddingClass =
    size === 'large'
      ? 'p-6 md:p-8'
      : size === 'wide'
      ? 'p-4 md:p-6'
      : 'p-3 md:p-4';

  const titleClass =
    size === 'large'
      ? 'text-3xl md:text-4xl'
      : size === 'wide'
      ? 'text-2xl md:text-3xl'
      : 'text-xl md:text-xl';

  // Text shadow style
  const textShadowClass = 'drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]';

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-surface-container rounded-xl overflow-hidden relative group hover:scale-[1.02] transition-all duration-300 w-full h-full ${paddingClass}`}
    >
      {image && (
        <Image
          src={image}
          alt={String(title)}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 25vw"
          className={`${imageClasses} rounded-xl`}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80 rounded-xl" />

      {/* Text */}
      <div className={`absolute bottom-6 left-6 ${textShadowClass}`}>
        <h5 className={`font-headline font-bold ${titleClass}`}>{title}</h5>

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