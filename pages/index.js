import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

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

  const addTask = async () => {
    await fetch("http://localhost:3000/api/tasks/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: taskName }),
    });
    fetchData();
    setTaskName("");
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
        <ol>
          {tasks.map((task, i) => {
            return (
              <li key={i}>
                <span>{task.name} </span>
                <button onClick={() => deleteTask(i)}>X</button>
              </li>
            );
          })}
        </ol>

        <br />
        <input
          placeholder="enter your task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        ></input>
        <button onClick={addTask}>+</button>
      </main>
    </div>
  );
}
