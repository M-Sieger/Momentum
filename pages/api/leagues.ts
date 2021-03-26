// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php"
  );
  const leagues = await response.json();
  res.status(200).json(leagues);
};
