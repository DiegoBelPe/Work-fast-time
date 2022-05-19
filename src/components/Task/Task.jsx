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
    <div>
      <h1>Task</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <button className="btn-blue" type="button">Add Task</button>
    </div>
  );
}

export default Task;
