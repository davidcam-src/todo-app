import React, { createContext, useState } from 'react';

//List will be using the context

export const TodoGlobalContext = createContext();

export const TodoGlobalProvider = ({ children }) => {
    const [todoGlobalVariable, setTodoGlobalVariable] = useState([]);
  
    //Need to wrap a react update state function inside of another function before using it in a component
    const updateTodoGlobalVariable = (newValue) => {
      setTodoGlobalVariable(newValue);
    };
  
    return (
      <TodoGlobalContext.Provider value={{ todoGlobalVariable, updateTodoGlobalVariable }}>
        {children}
      </TodoGlobalContext.Provider>
    );
  };

