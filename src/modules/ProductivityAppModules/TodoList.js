import React from 'react';

const TodoList = () => {
  return (
    <section className="flex productivity-container">
      <h2>TodoList component</h2>
      <ul>
        <li className="single-task">
          TASK 1
          <input className="checkbox" type="radio" />
        </li>
        <li className="single-task">
          TASK 2
          <input className="checkbox" type="radio" />
        </li>
        <li className="single-task">
          TASK 3
          <input className="checkbox" type="radio" />
        </li>
        <li className="single-task">
          TASK 4
          <input className="checkbox" type="radio" />
        </li>
      </ul>
    </section>
  );
};

export default TodoList;
