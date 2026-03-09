/* eslint-disable object-curly-spacing */
/* eslint-disable simple-import-sort/imports */

import type { NextApiRequest, NextApiResponse } from 'next';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

const client = new BetaAnalyticsDataClient({
  credentials: JSON.parse(process.env.GA_SERVICE_ACCOUNT!),
});

const GA_PROPERTY_ID = process.env.GA_PROPERTY_ID!;

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const [response] = await client.runReport({
      property: `properties/${GA_PROPERTY_ID}`,
      dateRanges: [
        { startDate: '2026-01-01', endDate: 'today' } // <--- required!
      ],
      metrics: [{ name: 'totalUsers' }], // total visitors
    });

    const totalUsers = response.rows?.[0]?.metricValues?.[0]?.value ?? '0';

    res.status(200).json({ count: Number(totalUsers) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
}