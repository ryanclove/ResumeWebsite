//import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {medalsItems, SectionId} from '../../data/data';
import {MedalsItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

// ------------------- Medals Component -------------------
const Medals: FC = memo(() => {
  const [selectedImage, setSelectedImage] = useState<MedalsItem['image'] | null>(null);

  // Memoized top-level handler for all medals
  const handleImageClick = useCallback((img: MedalsItem['image']) => {
    setSelectedImage(img);
  }, []);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Medals}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-2xl font-bold text-white">Medals Won</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {medalsItems.map((item, index) => (
            <MedalImage item={item} key={`${item.title}-${index}`} onClick={handleImageClick} />
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}>
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={e => e.stopPropagation()}>
            <Image alt="Expanded medal" className="rounded-lg object-contain" src={selectedImage} />
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

const MedalImage: FC<MedalImageProps> = memo(({item, onClick}) => {
  const handleClick = useCallback(() => {
    onClick(item.image);
  }, [item.image, onClick]);

  return (
    <div className="pb-6">
      <div className="relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
        <Image
          alt={item.title}
          className="h-full w-full cursor-pointer transition hover:scale-[1.02]"
          onClick={handleClick}
          placeholder="blur"
          src={item.image}
        />
        <ItemOverlay item={item} />
      </div>
    </div>
  );
});

// ------------------- ItemOverlay Component -------------------
const ItemOverlay: FC<{item: MedalsItem}> = memo(({item: {title, description}}) => {
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
      {/* Hover overlay content (desktop) */}
      <div
        className={classNames(
          'absolute inset-0 flex flex-col gap-y-2 p-4 overflow-y-auto overscroll-contain bg-gray-900 transition-opacity duration-300',
          !mobile ? 'opacity-0 hover:opacity-80' : showOverlay ? 'opacity-80' : 'opacity-0',
        )}
        pointer-events-auto>
        <h2 className="text-center font-bold text-white">{title}</h2>
        <p className="text-center text-xs text-white sm:text-sm">
          {description.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {/*<ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" /> */}
      </div>

      {/* Clickable overlay background (mobile) */}
      {mobile && (
        <div
          className={classNames('absolute inset-0', showOverlay ? 'pointer-events-auto' : 'pointer-events-none')}
          onClick={handleOverlayClick}
          ref={linkRef}
        />
      )}
    </div>
  );
});
