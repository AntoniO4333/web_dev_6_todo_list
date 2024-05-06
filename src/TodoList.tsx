import React from 'react';
import { Task, TaskStatus } from './types';

interface Props {
  title: string;
  tasks: Task[];
  updateTaskStatus: (id: number, status: TaskStatus) => void;
}

const TodoList: React.FC<Props> = ({ title, tasks, updateTaskStatus }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            {task.status === 'active' && (
              <>
                <button onClick={() => updateTaskStatus(task.id, 'completed')}>Complete</button>
                <button onClick={() => updateTaskStatus(task.id, 'deleted')}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
