/* eslint-disable object-curly-spacing */
import { FC, memo, useCallback, useMemo, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;
      setData(prev => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          alert('Message sent successfully!');
          setData(defaultData);
        } else {
          alert('Failed to send message: ' + result.message);
        }
      } catch (err) {
        console.error(err);
        alert('An error occurred while sending the message.');
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all p-4 text-on-surface placeholder:text-on-surface-variant';

  return (
    <form className="space-y-6" method="POST" onSubmit={handleSendMessage}>

      {/* Name */}
      <div>
        <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
          Full Name
        </label>
        <input
          className={inputClasses}
          name="name"
          value={data.name}
          onChange={onChange}
          placeholder="First name Last name"
          required
          type="text"
        />
      </div>

      {/* Email */}
      <div>
        <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
          Email Address
        </label>
        <input
          className={inputClasses}
          name="email"
          value={data.email}
          onChange={onChange}
          placeholder="email@example.com"
          required
          type="email"
        />
      </div>

      {/* Message */}
      <div>
        <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
          Message
        </label>
        <textarea
          className={inputClasses}
          name="message"
          value={data.message}
          onChange={onChange}
          placeholder="Describe your athletic goals..."
          required
          rows={4}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
      >
        Send Inquiry
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;