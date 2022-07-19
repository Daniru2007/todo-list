const fs = require("fs").promises;
var data = require("../../../data/tasks.json");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;
    data.push({ name: name });
    fs.writeFile("data/tasks.json", JSON.stringify(data));
    res.status(200).json({ data: name });
  }
}
