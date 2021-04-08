export default async function handler(req, res) {
  const { team } = req.query;
  const result = await fetch(
    `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4331&s=2020-2021`
  );
  const apiTeams = await result.json();
  const apiTeam = apiTeams.table.find((singleTeam) =>
    singleTeam.strTeam.includes(team)
  );
  res.status(200).json(apiTeam);
}
