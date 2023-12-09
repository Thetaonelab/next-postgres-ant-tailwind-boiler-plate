// pages/api/diners.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/dbConnect';
import DinerModel from '../../models/Diner';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const diners = await DinerModel.find();
      res.status(200).json({ success: true, data: diners });
    } catch (error: any) {
      console.error('Error fetching diners:', error.message);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
