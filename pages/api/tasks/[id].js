const fs = require("fs").promises;

export default async function handler(req, res) {
  const { id } = req.query;
  const r = await fetch("http://localhost:3000/tasks.json");
  const data = await r.json();
  const task = data[id];
  if (req.method === "POST") {
    const { name } = req.body;
    fs.writeFile(
      "http://localhost:3000/tasks.json",
      JSON.stringify({ data: name })
    );
    res.status(200).json({ data: name });
  } else if (req.method === "GET") {
    res.status(200).json({ data: task });
  }
}
