/* eslint-disable object-curly-spacing */
/* eslint-disable simple-import-sort/imports */
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'visitorCount.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  let count = 0;

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    count = JSON.parse(data).count || 0;
  }

  count++;

  fs.writeFileSync(filePath, JSON.stringify({ count }));

  res.status(200).json({ count });
}