/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-sort-props */
import { FC, memo, useState } from 'react';
import type { CollegeItem as CollegeItemType } from '../../../data/dataDef';
import CollegeItem from './CollegeItem';
import CollegeModal from './CollegeModal';

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
      <CollegeModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
});

CollegeSection.displayName = 'CollegeSection';
export default CollegeSection;