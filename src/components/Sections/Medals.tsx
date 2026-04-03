/* eslint-disable react/jsx-sort-props */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-curly-spacing */
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { medalsItems, SectionId } from '../../data/index';
import { MedalsItem } from '../../data/dataDef';
import Section from '../Layout/Section';

// COLOR MAP
const typeColor: Record<'gold' | 'goldrunnerup' | 'silver' | 'bronze', string> = {
  gold: 'text-amber-300',
  goldrunnerup: 'text-amber-400',
  silver: 'text-gray-300',
  bronze: 'text-orange-400',
};

// ------------------- Medals Component -------------------
const Medals: FC = memo(() => {
  const [selectedItem, setSelectedItem] = useState<MedalsItem | null>(null);

  // Counts
  const [count, setCount] = useState(0);
  const [goldCount, setGoldCount] = useState(0);
  const [goldRunnerUpCount, setGoldRunnerUpCount] = useState(0);
  const [silverCount, setSilverCount] = useState(0);
  const [bronzeCount, setBronzeCount] = useState(0);

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleImageClick = useCallback((item: MedalsItem) => {
    setSelectedItem(item);
  }, []);

  // Odometer animation
  useEffect(() => {
    const gold = medalsItems.filter(m => m.medalType === 'gold').length;
    const goldrunnerup = medalsItems.filter(m => m.medalType === 'goldrunnerup').length;
    const silver = medalsItems.filter(m => m.medalType === 'silver').length;
    const bronze = medalsItems.filter(m => m.medalType === 'bronze').length;
    const total = medalsItems.length;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let current = 0;
          const duration = 3600;
          const interval = 20;
          const step = Math.ceil(total / (duration / interval));

          const counter = setInterval(() => {
            current += step;
            if (current >= total) {
              setCount(total);
              setGoldCount(gold);
              setGoldRunnerUpCount(goldrunnerup);
              setSilverCount(silver);
              setBronzeCount(bronze);
              clearInterval(counter);
            } else {
              setCount(current);
              setGoldCount(Math.floor((current / total) * gold));
              setGoldRunnerUpCount(Math.floor((current / total) * goldrunnerup));
              setSilverCount(Math.floor((current / total) * silver));
              setBronzeCount(Math.floor((current / total) * bronze));
            }
          }, interval);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <Section className="bg-surface-container-low" sectionId={SectionId.Medals}>
      <div ref={sectionRef} className="container mx-auto px-6 flex flex-col gap-y-12">
        <div className="text-center mb-12">
          <span className="font-label text-secondary uppercase tracking-[0.5em] text-sm">
            The Gold Standard
          </span>
          <h2 className="font-headline text-6xl font-black mt-4">Medal Wall</h2>
        </div>

        {/* Medal Counts */}
        <div className="flex flex-col gap-y-1 sm:gap-y-2">
          <p
            className={`text-center font-semibold text-lg sm:text-xl transition-transform duration-300 ${count === medalsItems.length ? 'scale-110' : 'scale-100'
              }`}
          >
            🏅 {count} Total Medals and Counting! 🏅
          </p>
          <div className="flex justify-center gap-4 text-sm sm:text-base font-medium">
            <span className={typeColor['gold']}>🥇 {goldCount}</span>
            <span className={typeColor['goldrunnerup']}>🏅 {goldRunnerUpCount}</span>
            <span className={typeColor['silver']}>🥈 {silverCount}</span>
            <span className={typeColor['bronze']}>🥉 {bronzeCount}</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {medalsItems.map((item, index) => (
            <MedalImage key={`${item.title}-${index}`} item={item} onClick={handleImageClick} />
          ))}
        </div>
      </div>

      {/* Animated Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative max-h-[90vh] max-w-[90vw]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-300 transition"
              >
                ×
              </button>

              <h3
                className={classNames(
                  'text-lg sm:text-xl font-bold text-center mb-2',
                  selectedItem.medalType ? typeColor[selectedItem.medalType] : 'text-white'
                )}
              >
                {selectedItem.title}
              </h3>

              <p className="text-center text-sm text-white mb-4">
                {selectedItem.description.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              <Image
                alt="Expanded medal"
                className="rounded-lg object-contain w-full h-auto max-h-[90vh]"
                src={selectedItem.image || '/placeholder.png'}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
});

Medals.displayName = 'Medals Won';
export default Medals;

// ------------------- MedalImage Component -------------------
interface MedalImageProps {
  item: MedalsItem;
  onClick: (item: MedalsItem) => void;
}

const MedalImage: FC<MedalImageProps> = memo(({ item, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  const borderColor = item.medalType
    ? item.medalType === 'gold'
      ? 'border-amber-300'
      : item.medalType === 'goldrunnerup'
        ? 'border-amber-400'
        : item.medalType === 'silver'
          ? 'border-gray-300'
          : 'border-orange-400'
    : 'border-transparent';

  return (
    <div className="pb-2 sm:pb-4">
      <div
        className={classNames(
          'relative w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl border-2',
          borderColor
        )}
      >
        {/* Desktop hover overlay */}
        <div className="absolute inset-0 flex flex-col gap-y-2 p-3 sm:p-4 bg-gray-900 opacity-0 hover:opacity-80 transition-opacity duration-300 pointer-events-none sm:pointer-events-auto">
          <h2 className="text-center font-bold text-white text-sm sm:text-base">{item.title}</h2>
          <p className="text-center text-[10px] sm:text-xs text-white line-clamp-3 sm:line-clamp-none">
            {item.description.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <Image
          alt={item.title}
          className="w-full max-h-40 sm:max-h-64 md:max-h-80 cursor-pointer transition hover:scale-[1.02] object-contain"
          onClick={handleClick}
          placeholder="blur"
          src={item.image || '/placeholder.png'}
        />
      </div>
    </div>
  );
});