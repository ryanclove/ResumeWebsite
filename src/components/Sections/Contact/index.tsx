/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable object-curly-spacing */
import { FC, memo } from 'react';
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

import { contact, SectionId } from '../../../data/data';
import { ContactType, ContactValue } from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: { Icon: EnvelopeIcon, srLabel: 'Email' },
  [ContactType.Phone]: { Icon: DevicePhoneMobileIcon, srLabel: 'Phone' },
  [ContactType.Location]: { Icon: MapPinIcon, srLabel: 'Location' },
  [ContactType.Github]: { Icon: GithubIcon, srLabel: 'Github' },
  [ContactType.LinkedIn]: { Icon: LinkedInIcon, srLabel: 'LinkedIn' },
  [ContactType.Facebook]: { Icon: FacebookIcon, srLabel: 'Facebook' },
  [ContactType.Twitter]: { Icon: TwitterIcon, srLabel: 'Twitter' },
  [ContactType.Instagram]: { Icon: InstagramIcon, srLabel: 'Instagram' },
};

const Contact: FC = memo(() => {
  const { headerText, description, items } = contact;

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact} noPadding>
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <div className="flex flex-col items-center text-center gap-y-6">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:items-center">
            <EnvelopeIcon className="hidden h-16 w-16 text-white md:block" />
            <h2 className="text-2xl font-bold text-white">{headerText}</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl mx-auto">
            <div className="order-1 col-span-1 flex flex-col items-center gap-y-4 md:order-2">
              <p className="prose max-w-full leading-6 text-neutral-300">{description}</p>

              <dl className="flex flex-col w-full space-y-4 text-base text-neutral-500 sm:space-y-2">
                {items.map(({ type, text, href }) => {
                  const { Icon, srLabel } = ContactValueMap[type];
                  return (
                    <div key={srLabel}>
                      <dt className="sr-only">{srLabel}</dt>
                      <dd className="flex items-center justify-center">
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classNames(
                            '-m-2 flex items-center rounded-md p-2 text-neutral-300 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300'
                          )}
                        >
                          <Icon
                            aria-hidden="true"
                            className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-current transition-colors duration-300"
                          />
                          <span className="ml-3 text-sm sm:text-base">{text}</span>
                        </a>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
