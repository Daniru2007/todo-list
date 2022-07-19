const fs = require("fs").promises;
var data = require("../../../data/tasks.json");

export default async function handler(req, res) {
  const { id } = req.query;
  const task = data[id];
  if (req.method === "DELETE") {
    data.splice(id, 1);
    fs.writeFile("data/tasks.json", JSON.stringify(data));
    res.status(200).json({ delete: true });
  } else if (req.method === "PUT") {
    const { name } = req.body;
    data[id] = { name: name };
    fs.writeFile("data/tasks.json", JSON.stringify(data));
    res.status(200).json({ update: true });
  } else {
    res.status(200).json({ data: task });
  }
}
