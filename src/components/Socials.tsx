/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-sort-props */
import { FC, memo } from 'react';

import { socialLinks } from '../data/data';

const Socials: FC = memo(() => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialLinks.map(({ label, Icon, href, text, external }) => (
        <a
          key={label}
          aria-label={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="-m-1.5 flex flex-col items-center gap-1 rounded-md p-1.5 transition-all duration-300 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:flex-row sm:gap-2 sm:-m-3 sm:p-3"
        >
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          {text && (
            <span className="text-xs text-center sm:text-base sm:inline-block">
              {text}
            </span>
          )}
        </a>
      ))}
    </div>
  );
});

Socials.displayName = 'Socials';
export default Socials;
