import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4331&s=2020-2021"
  );
  const table = await response.json();
  res.status(200).json(table.table);
};
