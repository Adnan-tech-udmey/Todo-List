import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  
  Route,
} from "react-router-dom";
import { Routes } from "react-router-dom";

// import { cleanup } from '@testing-library/react';
 


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
   initTodo = [];
  }
  else
  {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("Iam on Delete");
    // deleting this way in react doesnt work
    // let index = todos.indexOf(todos);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;


    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("Iam adding this todo", title, desc)
    let sno
    if(todos.length===0)
    {
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1; 
    } 
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

   
    if(localStorage.getItem("todos")){
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  }
  
 
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);
    // return(
    //  <> 
    //     <Router>
    //       <Header title="My Todos List" searchBar={false} /> 
    //       < Routes>
    //           <Route exact path="/" render={()=>{
    //             return(
    //             <>
    //             <AddTodo addTodo={addTodo} />
    //             <Todos todos={todos} onDelete={onDelete} /> 
    //             </>)
    //           }}> 
    //           </Route>
    //           <Route exact path="/about">
    //             <About />
    //           </Route> 
    //         </Routes> 
    //       <Footer />
    //     </Router>
    //     </>
    // );
  
    return (
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            } 
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    );
 
 
}

export default App;

