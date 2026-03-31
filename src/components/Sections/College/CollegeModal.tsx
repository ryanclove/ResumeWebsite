/* eslint-disable react/jsx-sort-props */
import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CollegeItem as CollegeItemType } from '../../../data/dataDef';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface CollegeModalProps {
  item: CollegeItemType | null;
  onClose: () => void;
}

const CollegeModal: FC<CollegeModalProps> = ({ item, onClose }) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-surface-container rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-on-surface hover:text-primary transition"
              onClick={onClose}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
            {item.content}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CollegeModal;