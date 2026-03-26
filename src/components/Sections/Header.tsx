/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-sort-props */
import { Dialog, Transition } from '@headlessui/react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { FC, Fragment, memo, useCallback, useMemo, useState } from 'react';

import { SectionId } from '../../data/index';
import { useNavObserver } from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);

  const navSections = useMemo(
    () => [
      SectionId.About,
      SectionId.Resume,
      SectionId.Medals,
      SectionId.College,
      SectionId.Testimonials,
    ],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    if (section) setCurrentSection(section);
  }, []);

  useNavObserver(
    navSections.map(section => `#${section}`).join(','),
    intersectionHandler
  );

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

//
// ✅ DESKTOP NAV
//
const DesktopNav: FC<{ navSections: SectionId[]; currentSection: SectionId | null }> = memo(
  ({ navSections, currentSection }) => {
    return (
      <header
        id={headerID}
        className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-blue-900/20 hidden md:block"
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">

          {/* Logo / Name */}
          <Link
            href="#hero"
            className="text-2xl font-black tracking-tighter text-white font-headline uppercase hover:text-blue-500"
          >
            Coach Ryan
          </Link>

          {/* Nav Links */}
          <div className="flex items-center space-x-8 font-label uppercase tracking-widest text-xs">
            {navSections.map(section => (
              <NavItem
                key={section}
                section={section}
                current={section === currentSection}
                inactiveClass="text-slate-400 hover:text-slate-100 transition-colors"
                activeClass="text-white"
              />
            ))}

            {/* CTA Button */}
            <Link
              href={`/#${SectionId.Contact}`}
              className="bg-primary text-on-primary px-6 py-2 rounded-md font-bold tracking-normal hover:bg-primary-fixed transition-all active:scale-95 duration-200"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
    );
  }
);

//
// ✅ MOBILE NAV
//
const MobileNav: FC<{ navSections: SectionId[]; currentSection: SectionId | null }> = memo(
  ({ navSections, currentSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(prev => !prev);
    }, []);

    return (
      <>
        {/* Hamburger */}
        <button
          aria-label="Menu Button"
          className="fixed right-4 top-4 z-[9999] rounded-md bg-slate-900 p-2 text-white md:hidden"
          onClick={toggleOpen}
        >
          <Bars3BottomRightIcon className="h-8 w-8" />
        </button>

        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-[9999] md:hidden" onClose={toggleOpen}>

            {/* Overlay */}
            <Transition.Child
              as={Fragment}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/70" />
            </Transition.Child>

            {/* Panel */}
            <Transition.Child
              as={Fragment}
              enter="transition transform duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto w-3/4 max-w-sm bg-slate-950 p-6 h-full flex flex-col">

                {/* Logo / Name */}
                <Link
                  href="#hero"
                  onClick={toggleOpen}
                  className="text-xl font-bold text-white mb-6 text-right hover:text-blue-500"
                >
                  Coach Ryan
                </Link>

                {/* Nav Links */}
                <nav className="flex flex-col gap-4 items-end text-right">
                  {navSections.map(section => (
                    <NavItem
                      key={section}
                      section={section}
                      current={section === currentSection}
                      onClick={toggleOpen}
                      activeClass="text-white font-bold"
                      inactiveClass="text-slate-300"
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  }
);

//
// ✅ NAV ITEM
//
const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({ section, current, activeClass, inactiveClass, onClick }) => {
  return (
    <Link
      href={`/#${section}`}
      onClick={onClick}
      className={classNames(
        current ? activeClass : inactiveClass,
        'transition-colors'
      )}
    >
      {section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;