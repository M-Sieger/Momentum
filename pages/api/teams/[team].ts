export default function handler(req, res) {
  fetch(
    "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4331&s=2020-2021"
  );
  const { team } = req.query;
  res.end(`Post: ${team}`);
}
