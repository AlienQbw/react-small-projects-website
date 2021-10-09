import React, { useState } from 'react';
import data from './../../tasksData/data.json';
const Tasks = () => {
  const [toDoList, setToDoList] = useState(data);
  const [isNewCategoryActive, setIsNewCategoryActive] = useState(false);
  const [isNewTaskActive, setIsNewTaskActive] = useState(false);
  const [isNewTaskActiveId, setIsNewTaskActiveId] = useState(null);
  const AddNewCategoryContainer = () => {
    return (
      <>
        <input type="text" placeholder="Enter category name..." />
        <button>Save</button>
      </>
    );
  };

  const AddNewTaskContainer = (categoryId) => {
    return (
      <>
        <input type="text" placeholder="Enter task name..." />
        <button>Add</button>
      </>
    );
  };

  return (
    <section className="productivity-module container">
      <button
        onClick={() => {
          setIsNewCategoryActive(!isNewCategoryActive);
        }}
      >
        Add new category
      </button>
      {isNewCategoryActive ? <AddNewCategoryContainer /> : null}
      {toDoList.map((el) => {
        return (
          <div key={el.id}>
            <h2>{el.category}</h2>
            <ul>
              {el.tasks.map((e) => {
                return <li key={e}>{e}</li>;
              })}
            </ul>
            <button
              onClick={() => {
                setIsNewTaskActive(!isNewTaskActive);
                setIsNewTaskActiveId(el.id);
              }}
            >
              New Task
            </button>
            {isNewTaskActive && isNewTaskActiveId === el.id ? (
              <AddNewTaskContainer>{el.id}</AddNewTaskContainer>
            ) : null}
          </div>
        );
      })}
    </section>
  );
};

export default Tasks;
