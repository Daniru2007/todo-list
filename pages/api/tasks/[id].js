export default async function handler(req, res) {
  const { id } = req.query;
  const r = await fetch("http://localhost:3000/tasks.json");
  const data = await r.json();
  const task = data[id];
  if (req.method === "POST") {
    res.status(300).json({ data: "u sucks" });
  } else if (req.method === "GET") {
    res.status(200).json({ data: task });
  }
}
