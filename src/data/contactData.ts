/* eslint-disable object-curly-spacing */
import { ContactSection, ContactType } from './dataDef';

export const contact: ContactSection = {
  headerText: 'Get in touch!',
  description: 'Email me for inquiries about coaching, private lessons, or any other questions you may have.',
  items: [
    {
      type: ContactType.Email,
      text: 'ryan.coslove@viennaelite.org',
      href: 'mailto:ryan.coslove@viennaelite.org',
    },
    {
      type: ContactType.Location,
      text: 'DM(V), USA',
    },
    {
      type: ContactType.Instagram,
      text: '@coachryantutu',
      href: 'https://www.instagram.com/coachryantutu/',
    },
  ],
};