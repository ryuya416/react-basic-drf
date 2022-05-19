import React, { useState, useEffect } from "react";
import axios from "axios";

export const DrfApiFetch = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: "Token 80354b461d950032f7bb80feadd24b8d7869645f",
        },
      })
      .then((res) => {
        setTasks(res.data);
      });
  }, []);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.id}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
