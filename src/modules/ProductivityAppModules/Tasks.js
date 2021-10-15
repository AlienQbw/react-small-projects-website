import React, { useState, useRef } from 'react';
import cross from './media/close-cross.png';
import data from './../../tasksData/data.json';
import { useGlobalProductivityContext } from '../../productivityContext';
import TodoList from './TodoList';

const Tasks = () => {
  const { isSideBarOpen, toggleSideBar } = useGlobalProductivityContext();

  const [toDoList, setToDoList] = useState(data);
  const [isNewCategoryActive, setIsNewCategoryActive] = useState(false);
  const [isNewTaskActive, setIsNewTaskActive] = useState(false);
  const [isNewTaskActiveId, setIsNewTaskActiveId] = useState(null);

  const [listForToDo, setListForToDo] = useState([]);

  const newCategoryInput = useRef(null);
  const newTaskInput = useRef(null);

  const addToToDoList = (item) => {
    if (listForToDo.indexOf(item) === -1) {
      setListForToDo([...listForToDo, item]);
    }
  };

  const addNewCategory = () => {
    setToDoList([
      ...toDoList,
      {
        id: toDoList.length,
        category: newCategoryInput.current.value,
        tasks: [],
      },
    ]);
    setIsNewCategoryActive(false);
  };
  const addNewTask = (categoryId) => {
    if (
      toDoList[categoryId.children].tasks.indexOf(
        newTaskInput.current.value
      ) === -1
    ) {
      let newArray = toDoList;
      newArray[categoryId.children].tasks.push(newTaskInput.current.value);
      setToDoList(newArray);
      setIsNewTaskActive(false);
    } else {
      alert('Task already exists!');
    }
  };

  const AddNewCategoryContainer = () => {
    return (
      <>
        <input
          className="task-input"
          type="text"
          placeholder="Enter category name..."
          ref={newCategoryInput}
        />
        <button onClick={addNewCategory} className="btn-productivity-small">
          Save
        </button>
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
          ref={newTaskInput}
        />
        <button
          onClick={() => addNewTask(categoryId)}
          className="btn-productivity-small"
        >
          Add
        </button>
      </>
    );
  };

  return (
    <div>
      <TodoList list={listForToDo} />
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
                  return (
                    <li key={e}>
                      {e}
                      <button onClick={() => addToToDoList(e)}>+</button>
                    </li>
                  );
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
    </div>
  );
};

export default Tasks;
