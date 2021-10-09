import React, { useState } from 'react';
import cross from './media/close-cross.png';
import data from './../../tasksData/data.json';
import { useGlobalProductivityContext } from '../../productivityContext';

const Tasks = () => {
  const { isSideBarOpen, toggleSideBar } = useGlobalProductivityContext();

  const [toDoList, setToDoList] = useState(data);
  const [isNewCategoryActive, setIsNewCategoryActive] = useState(false);
  const [isNewTaskActive, setIsNewTaskActive] = useState(false);
  const [isNewTaskActiveId, setIsNewTaskActiveId] = useState(null);
  const AddNewCategoryContainer = () => {
    return (
      <>
        <input
          className="task-input"
          type="text"
          placeholder="Enter category name..."
        />
        <button className="btn-productivity-small">Save</button>
      </>
    );
  };

  const AddNewTaskContainer = (categoryId) => {
    return (
      <>
        <input
          className="task-input"
          type="text"
          placeholder="Enter task name..."
        />
        <button className="btn-productivity-small">Add</button>
      </>
    );
  };

  return (
    <section
      className={
        isSideBarOpen
          ? 'tasks-categories-container open container'
          : 'tasks-categories-container container'
      }
    >
      <button className="close-cross-btn" onClick={toggleSideBar}>
        <img src={cross} alt="close-cross" />
      </button>
      <div className="add-container">
        <button
          className="btn-productivity"
          onClick={() => {
            setIsNewCategoryActive(!isNewCategoryActive);
          }}
        >
          Add new category
        </button>
        {isNewCategoryActive ? <AddNewCategoryContainer /> : null}
      </div>
      {toDoList.map((el) => {
        return (
          <div key={el.id}>
            <h2>{el.category}</h2>
            <ul>
              {el.tasks.map((e) => {
                return <li key={e}>{e}</li>;
              })}
            </ul>
            <div className="add-container">
              <button
                className="btn-productivity"
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
          </div>
        );
      })}
    </section>
  );
};

export default Tasks;
