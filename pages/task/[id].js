import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function task() {
  const [name, setName] = useState("");
  const router = useRouter();

  const fetchData = async () => {
    const req = await fetch("http://localhost:3000/api/tasks");
    const { data } = await req.json();
    setName(data[id].name);
  };

  useEffect(() => {
    if (!router.isReady) return;
    fetchData();
  }, [router.isReady]);

  const query = router.query;
  const id = query.id;

  const updateTask = async (ind, name) => {
    await fetch(`http://localhost:3000/api/tasks/${ind}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    });
  };

  return (
    <div>
      <input
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="update your task..."
      ></input>
      <br />

      <button onClick={() => updateTask(query.id, name)}>Save</button>
    </div>
  );
}
