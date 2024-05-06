import React, { useState } from 'react';
import TodoList from './TodoList';
import { Task, TaskStatus } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      text: input,
      status: 'active'
    };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const updateTaskStatus = (id: number, status: TaskStatus) => {
    setTasks(tasks.map(task => task.id === id ? {...task, status: status} : task));
  };

  return (
    <div className="app-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <TodoList title="Active Tasks" tasks={tasks.filter(task => task.status === 'active')} updateTaskStatus={updateTaskStatus} />
      <TodoList title="Completed Tasks" tasks={tasks.filter(task => task.status === 'completed')} updateTaskStatus={updateTaskStatus} />
      <TodoList title="Deleted Tasks" tasks={tasks.filter(task => task.status === 'deleted')} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default App;
