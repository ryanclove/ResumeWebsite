/* eslint-disable object-curly-spacing */
import type {NextApiRequest, NextApiResponse} from 'next';
import {Resend} from 'resend';

//const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  _req: NextApiRequest, // rename to _req to indicate it’s intentionally unused
  res: NextApiResponse,
) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Website Contact <onboarding@resend.dev>',
      to: 'ryan.coslove@viennaelite.org',
      subject: 'Local Test Email from Resend',
      text: 'This is a test email to confirm that your verified domain works.',
    });

    res.status(200).json({message: 'Test email sent successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Failed to send test email', error});
  }
}
