const fs = require("fs").promises;
const data = require("../../../data/tasks.json");
export default async function handler(req, res) {
  res.status(200).json({ data: data });
}
