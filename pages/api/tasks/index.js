export default async function handler(req, res) {
  const r = await fetch("http://localhost:3000/tasks.json");
  const data = await r.json();
  res.status(200).json({ data: data });
}
