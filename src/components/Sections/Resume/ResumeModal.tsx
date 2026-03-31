import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TimelineItem } from '../../../data/dataDef';

interface ResumeModalProps {
  item: TimelineItem | null;
  onClose: () => void;
}

const ResumeModal: FC<ResumeModalProps> = ({ item, onClose }) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <motion.div
            className="bg-surface-container-high p-6 rounded-xl max-w-xl w-full relative shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white text-xl z-50"
            >
              ✕
            </button>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-secondary mb-4">
              {item.location} • {item.date}
            </p>
            <div className="text-sm text-white">{item.content}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;