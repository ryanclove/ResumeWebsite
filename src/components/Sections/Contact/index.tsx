/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable object-curly-spacing */
import { FC, memo } from 'react';
import Section from '../../Layout/Section';
import { SectionId, contact } from '../../../data/index';
import ContactForm from './ContactForm';

const Contact: FC = memo(() => {
  const { description, items } = contact;

  return (
    <Section className="bg-surface-container-lowest py-32" sectionId={SectionId.Contact}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT SIDE */}
          <div>
            <h2 className="font-headline text-5xl md:text-6xl font-black mb-6 leading-tight">
              Ready to <br />
              <span className="text-primary">Evolve?</span>
            </h2>

            <p className="text-on-surface-variant text-lg mb-10 max-w-md">
              {description}
            </p>

            <div className="space-y-6">
              {items.map(({ text, href }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">
                    {i === 0 ? 'email' : i === 1 ? 'location' : 'instagram'}
                  </span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-headline hover:text-primary transition-colors"
                  >
                    {text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;