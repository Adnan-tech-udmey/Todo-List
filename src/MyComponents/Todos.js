import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

 export const Todos = (props) => {
  let mystyle ={
    minHeight: "70vh"
    

  }
  return (
    <div className="container my-3" style={mystyle}>
      <h4 className="my-3">Todo List</h4>
      { props.todos.length===0? "No todos to display":
       props.todos.map((todo)=>{
        return (<TodoItem todo={todo} key ={todo.sno} onDelete={props.onDelete}/>)
      

      })
      }
     
      
    </div>
  )
}

export default Todos
