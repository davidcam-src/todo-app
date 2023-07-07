// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import React, { useState } from 'react';
import { TodoGlobalProvider } from './components/TodoGlobalContext';


function App() {

  return (
    //Context can be used to forward the todoList state variable to all components in the app
    <TodoGlobalProvider >
      <div className="App">
      <Todo/>
      </div>
    </TodoGlobalProvider>
  );
}

export default App;
