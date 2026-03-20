/* eslint-disable react/jsx-sort-props */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-curly-spacing */
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { isMobile } from '../../config';
import { medalsItems, SectionId } from '../../data/index';
import { MedalsItem } from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
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
  const [selectedImage, setSelectedImage] = useState<MedalsItem['image'] | null>(null);

  // Counts
  const [count, setCount] = useState(0);
  const [goldCount, setGoldCount] = useState(0);
  const [goldRunnerUpCount, setGoldRunnerUpCount] = useState(0);
  const [silverCount, setSilverCount] = useState(0);
  const [bronzeCount, setBronzeCount] = useState(0);

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleImageClick = useCallback((img: MedalsItem['image']) => {
    setSelectedImage(img);
  }, []);

  // ------------------- Odometer-Style Animation -------------------
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
          const duration = 3600; // total animation duration ms
          const interval = 20; // update frequency
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
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Medals}>
      <div ref={sectionRef} className="flex flex-col gap-y-6 sm:gap-y-8">
        <h2 className="self-center text-2xl font-bold text-white">Medals Won</h2>

        {/* TOTAL COUNT */}
        {/* Wrap total + per-type counts in a flex-col with smaller gap */}
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

        {/* GRID OF MEDALS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {medalsItems.map((item, index) => (
            <MedalImage item={item} key={`${item.title}-${index}`} onClick={handleImageClick} />
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={e => e.stopPropagation()}>
            <Image
              alt="Expanded medal"
              className="rounded-lg object-contain w-full h-auto max-h-[90vh]"
              src={selectedImage}
            />
          </div>
        </div>
      )}
    </Section>
  );
});

Medals.displayName = 'Medals Won';
export default Medals;

// ------------------- MedalImage Component -------------------
interface MedalImageProps {
  item: MedalsItem;
  onClick: (img: MedalsItem['image']) => void;
}

const MedalImage: FC<MedalImageProps> = memo(({ item, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(item.image);
  }, [item.image, onClick]);

  // CARD BORDER COLOR BASED ON medalType
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
        <Image
          alt={item.title}
          className="w-full max-h-40 sm:max-h-64 md:max-h-80 cursor-pointer transition hover:scale-[1.02] object-contain"
          onClick={handleClick}
          placeholder="blur"
          src={item.image || '/placeholder.png'}
        />
        <ItemOverlay item={item} />
      </div>
    </div>
  );
});

// ------------------- ItemOverlay Component -------------------
const ItemOverlay: FC<{ item: MedalsItem }> = memo(({ item: { title, description } }) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) setMobile(true);
  }, []);

  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleOverlayClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <div className="absolute inset-0">
      <div
        className={classNames(
          'absolute inset-0 flex flex-col gap-y-2 p-3 sm:p-4 bg-gray-900 transition-opacity duration-300',
          !mobile
            ? 'opacity-0 hover:opacity-80 overflow-y-auto'
            : showOverlay
              ? 'opacity-80 pointer-events-auto overflow-y-auto'
              : 'opacity-0 pointer-events-none',
        )}
      >
        <h2 className="text-center font-bold text-white text-sm sm:text-base">{title}</h2>

        <p className="text-center text-[10px] sm:text-xs text-white line-clamp-3 sm:line-clamp-none">
          {description.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      {mobile && (
        <div
          className={classNames(
            'absolute inset-0',
            showOverlay ? 'pointer-events-auto' : 'pointer-events-none',
          )}
          onClick={handleOverlayClick}
          ref={linkRef}
        />
      )}
    </div>
  );
});