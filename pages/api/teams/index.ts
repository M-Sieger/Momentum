import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=German%20Bundesliga"
  );
  const teams = await response.json();
  res.status(200).json(teams.teams);
};
