import React, { useEffect, useState } from 'react';
import { useGlobalProductivityContext } from '../../productivityContext';

const TodoList = (data) => {
  const { toggleSideBar } = useGlobalProductivityContext();

  const [list, setList] = useState(data.list);

  useEffect(() => {
    if (data.list.length > 0) {
      setList([...list, data.list[data.list.length - 1]]);
    }
  }, [data.list]);
  if (list.length > 0) {
    return (
      <section className="flex productivity-container">
        <ul>
          {list.map((el) => {
            return (
              <label key={el} className="task-container">
                <li className="single-task">
                  <input type="checkbox" />
                  {el}
                  <span className="checkmark"></span>
                </li>
              </label>
            );
          })}
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
  }
  return (
    <section className="flex productivity-container">
      <ul>
        <label className="task-container">
          <li className="single-task">No items to display, please add them</li>
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
