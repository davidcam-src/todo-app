import React, { useState, useContext, useEffect  } from 'react';
import { TodoGlobalContext } from './TodoGlobalContext';

const Todo = () => {

    const { todoGlobalVariable, updateTodoGlobalVariable } = useContext(TodoGlobalContext);
    const [todoText, setTodoText] = useState('');
    var todoArray = [];

    useEffect(() => {
        console.log('i get executed whenever globalVariable changes: ', JSON.stringify(todoGlobalVariable))
     }, [todoGlobalVariable]) 

    const handleInputChange = (e) => {
        //e = event
        //target = element triggering the event (input)
        setTodoText(e.target.value);
    }

    const addTodo = (text) => {
        const newTodo = {
          id: Date.now(),
          text: text,
          status: "Backlog"
        };
    updateTodoGlobalVariable([...todoGlobalVariable, newTodo]);
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.trim() === '') {
            // Ignore empty submissions
            return;
          }
          //Pushing to test array
          todoArray.push(todoText);
          //Pushing to state array within context
          addTodo(todoText)
          // Setting state Within textbox
          setTodoText('');
        //   console.log(JSON.stringify(todoArray))
          console.log(JSON.stringify(todoGlobalVariable))
      };


    return (
        <div>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={handleInputChange}
          placeholder="Add a new Todo"
        />
        <button type="submit">Add</button>
        </form>
        </div>
    )
}

export default Todo;