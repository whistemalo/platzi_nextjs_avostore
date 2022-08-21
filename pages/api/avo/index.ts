// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Database from '../../../database/db'

type Data = {
  data: TProduct[],
  length : number
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
  
    const db = new Database
    const allentries = await db.getAll();
    const Nentries = allentries.length
  res.status(200).json({data: allentries,length: Nentries })
}




