import React, { useEffect, useState } from 'react';
import { getDataCollection } from '../../utils/firebase';

function Task() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getDataCollection('tasks').then((data) => {
      setTasks(data);
    });
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="bg-red-900">Task</h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <button className="btn btn-blue btn-blue:hover" type="button">Add Task</button>
    </div>
  );
}

export default Task;
