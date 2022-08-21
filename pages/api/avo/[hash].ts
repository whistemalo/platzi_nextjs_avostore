import type { NextApiRequest, NextApiResponse } from 'next'
import Database from '../../../database/db'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const hash = req.query.hash
    const db = new Database
    const entrie = await db.getById(hash as string);
  res.status(200).json(entrie)
}
