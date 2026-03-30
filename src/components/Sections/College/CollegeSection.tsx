/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-sort-props */
import { FC, memo, useState } from 'react';
import type { CollegeItem as CollegeItemType } from '../../../data/dataDef';
import CollegeItem from './CollegeItem';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface CollegeSectionProps {
  title: string;
  items: CollegeItemType[];
  className?: string;
}

const CollegeSection: FC<CollegeSectionProps> = memo(({ title, items, className = '' }) => {
  const [activeItem, setActiveItem] = useState<CollegeItemType | null>(null);

  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">{title}</h2>
          <div className="mt-2 md:mt-0 font-label text-primary uppercase tracking-[0.2em] text-sm">
            NCAA Division Placements
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-4">
          {items.map((item, index) => (
            <div key={index} onClick={() => setActiveItem(item)} className="cursor-pointer">
              <CollegeItem item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-surface-container rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-on-surface hover:text-primary transition"
              onClick={() => setActiveItem(null)}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Content */}
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">{activeItem.title}</h3>
            {activeItem.content}
          </div>
        </div>
      )}
    </section>
  );
});

CollegeSection.displayName = 'CollegeSection';
export default CollegeSection;