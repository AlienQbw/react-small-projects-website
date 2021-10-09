import React, { useContext, useState, useEffect } from 'react';

const ProductivityContext = React.createContext();

const ProductivityProvider = ({ children }) => {
  /* TASKS SIDEBAR */
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const musicGenre = ['Lofi', 'Rock', 'POP', 'Instrumental'];
  class User {
    constructor(timer, music, tasks, history) {
      this.timer = timer;
      this.music = music;
      this.tasks = tasks;
      this.history = history;
    }
    set NewTimer(newTimer) {
      this.timer = newTimer;
    }
    set MusicGenre(newMusic) {
      this.music = newMusic;
    }
  }
  const defaultUser = new User(30, 'Lofi', [{ name: '', category: '' }], []);
  return (
    <ProductivityContext.Provider
      value={{ defaultUser, musicGenre, toggleSideBar, isSideBarOpen }}
    >
      {children}
    </ProductivityContext.Provider>
  );
};

export const useGlobalProductivityContext = () => {
  return useContext(ProductivityContext);
};

export { ProductivityContext, ProductivityProvider };
