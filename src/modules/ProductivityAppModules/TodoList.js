import React, { useState } from 'react';
import { useGlobalProductivityContext } from '../../productivityContext';

const TodoList = () => {
  const { toggleSideBar } = useGlobalProductivityContext();

  return (
    <section className="flex productivity-container">
      <ul>
        <label className="task-container">
          <li className="single-task">
            <input type="checkbox" />
            Task to complete at the moment 1<span className="checkmark"></span>
          </li>
        </label>
        <label className="task-container">
          <li className="single-task">
            <input type="checkbox" />
            Task to complete at the moment 2<span className="checkmark"></span>
          </li>
        </label>
        <label className="task-container">
          <li className="single-task">
            <input type="checkbox" />
            Task to complete at the moment 3<span className="checkmark"></span>
          </li>
        </label>
        <label className="task-container">
          <li className="single-task">
            <input type="checkbox" />
            Task to complete at the moment 4<span className="checkmark"></span>
          </li>
        </label>
      </ul>
      <button
        className="btn-productivity"
        style={{ backgroundColor: '#bd0303', color: '#fff' }}
        onClick={toggleSideBar}
      >
        Select Task
      </button>
    </section>
  );
};

export default TodoList;
