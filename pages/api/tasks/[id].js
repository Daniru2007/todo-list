const fs = require("fs").promises;
var data = require("../../../data/tasks.json");

export default async function handler(req, res) {
  const { id } = req.query;
  const task = data[id];
  res.status(200).json({ data: task });
}
