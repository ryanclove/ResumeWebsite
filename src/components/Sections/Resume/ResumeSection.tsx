/* eslint-disable object-curly-spacing */
import { FC, memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TimelineItem as ResumeItemType } from '../../../data/dataDef';
import ResumeItem from './ResumeItem';
import ResumeModal from './ResumeModal';

interface ResumeSectionProps {
  title: string;
  items: ResumeItemType[];
  variant?: 'featured' | 'grid';
  defaultOpen?: boolean;
}

const ResumeSection: FC<ResumeSectionProps> = memo(
  ({ title, items, variant = 'grid', defaultOpen = false }) => {
    const [selectedItem, setSelectedItem] = useState<ResumeItemType | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <h2
            className="font-headline text-4xl md:text-5xl font-bold mb-6 cursor-pointer flex items-center justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
            <span className="ml-2">{isOpen ? '▲' : '▼'}</span>
          </h2>

          {/* Collapsible Content with animation */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4 mt-4">
                  {items.map((item, index) => {
                    let size: 'large' | 'wide' | 'normal' = 'normal';

                    // Only coaching gets special layout
                    if (variant === 'featured') {
                      if (index === 0) size = 'large';
                      else if (index === 1) size = 'wide';
                    }

                    // Special case: Education with only 1 item
                    if (title === 'Education' && items.length === 1) {
                      size = 'wide';
                    }

                    return (
                      <ResumeItem
                        key={index}
                        item={{ ...item, size }}
                        onClick={() => setSelectedItem(item)}
                      />
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modal */}
          <ResumeModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
      </section>
    );
  }
);

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;