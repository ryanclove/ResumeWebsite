import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({label, Icon, href, text}) => (
        <a
          aria-label={label}
          className="-m-1.5 flex items-center gap-2 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
          href={href}
          key={label}>
          <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
          {text && <span className="hidden sm:inline">{text}</span>}
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
