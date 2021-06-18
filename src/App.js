import React,{useState} from "react";
import './App.css';
import{ Button,FormControl,Input,InputLabel} from '@material-ui/core';
 





function App() {
  const [todos,setTodos]=useState([]);
  const[input,setInput]=useState('');


  const addTodo = (event) => {
    setTodos([...todos,input]);
    event.preventDefault();
    setInput("");
        
  }

  return (
    <div className="App">
      <header className="header">
         <h1>Todo List</h1>
         <FormControl>
             <InputLabel>write a todo✍️</InputLabel>
              <Input value={input} onChange={event => setInput(event.target.value)}/>
         </FormControl>

         <Button onClick={addTodo} variant="contained" color="primary">
               Add Todo
         </Button>
         <ul>
           {todos.map(todo=> (
              <li>{todo}</li>
           ))}
         </ul>
      </header>
    </div>
  );
}

export default App;
