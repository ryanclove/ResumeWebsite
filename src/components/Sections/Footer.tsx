/* eslint-disable object-curly-spacing */
import { BoltIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { FC, memo, useEffect, useState } from 'react';

import { SectionId } from '../../data/data';
//import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/visitors')
      .then((res) => res.json())
      .then((data) => setVisitors(data.count))
      .catch(() => null);
  }, []);

  return (
    <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
      {/* Scroll-to-top button */}
      <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
        <a
          className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
          href={`/#${SectionId.Hero}`}
        >
          <ChevronUpIcon className="h-6 w-6 bg-transparent text-black sm:h-8 sm:w-8" />
        </a>
      </div>

      <div className="flex flex-col items-center gap-y-6">
        <div className="flex gap-x-4 text-neutral-500">{/* <Socials /> */}</div>
        <a
          className="-m-2 flex items-center gap-x-1 rounded-md p-2 ring-yellow focus:outline-none focus:ring-2"
          href="https://reactresume.com"
        >
          <BoltIcon className="h-5 w-5 text-yellow" />
          <span>
            Provided by <span className="text-white">React</span>
            <span className="italic text-yellow">Resume</span>
          </span>
        </a>
        <span className="text-sm text-neutral-700">© Copyright {currentYear} Tim Baker</span>
        <span className="text-sm text-neutral-700">© Copyright {currentYear} Ryan Coslove</span>
      </div>

      {/* Visitor Counter - hidden until hover */}
      {visitors !== null && (
        <div className="absolute bottom-4 right-4 group">
          <div className="opacity-20 group-hover:opacity-100 transition-opacity duration-300 rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-400 shadow-md cursor-default">
            👀 {visitors.toLocaleString()} visitors
          </div>
        </div>
      )}
    </div>
  );
});

Footer.displayName = 'Footer';
export default Footer;