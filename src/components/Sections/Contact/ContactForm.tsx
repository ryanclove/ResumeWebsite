/* eslint-disable object-curly-spacing */
import { FC, memo, useCallback, useMemo, useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

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
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
      setStatus('loading');
      setErrorMessage('');

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          setStatus('success');
          setData(defaultData);
        } else {
          setStatus('error');
          setErrorMessage(result.message ?? 'Something went wrong. Please try again.');
        }
      } catch (err) {
        console.error(err);
        setStatus('error');
        setErrorMessage('Network error — please check your connection and try again.');
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all p-4 text-on-surface placeholder:text-on-surface-variant disabled:opacity-50';

  const isLoading = status === 'loading';

  return (
    <form className="space-y-6" method="POST" onSubmit={handleSendMessage}>

      {/* Name */}
      <div>
        <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
          Full Name
        </label>
        <input
          className={inputClasses}
          disabled={isLoading}
          name="name"
          onChange={onChange}
          placeholder="First and Last name"
          required
          type="text"
          value={data.name}
        />
      </div>

      {/* Email */}
      <div>
        <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
          Email Address
        </label>
        <input
          className={inputClasses}
          disabled={isLoading}
          name="email"
          onChange={onChange}
          placeholder="email@example.com"
          required
          type="email"
          value={data.email}
        />
      </div>

      {/* Message */}
      <div>
        <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
          Message
        </label>
        <textarea
          className={inputClasses}
          disabled={isLoading}
          name="message"
          onChange={onChange}
          placeholder="Describe your athletic goals..."
          required
          rows={4}
          value={data.message}
        />
      </div>

      {/* Inline status messages */}
      {status === 'success' && (
        <p className="text-sm text-green-400 font-medium">
          ✓ Message sent! I'll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-400 font-medium">
          ✗ {errorMessage}
        </p>
      )}

      {/* Submit */}
      <button
        className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? (
          <>
            {/* Simple CSS spinner — no extra dependency needed */}
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-on-primary border-t-transparent" />
            Sending…
          </>
        ) : (
          'Send Inquiry'
        )}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;