import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const req = await fetch("http://localhost:3000/api/tasks");
    const { data } = await req.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteTask = async (ind) => {
    await fetch(`http://localhost:3000/api/tasks/${ind}`, { method: "DELETE" });
    fetchData();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo List App</title>
        <meta name="description" content="This is a Todo List App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Todo List</h1>
        <ul>
          {tasks.map((task, i) => {
            return (
              <li key={i}>
                <span>task: {task.name} </span>
                <button onClick={() => deleteTask(i)}>delete</button>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
