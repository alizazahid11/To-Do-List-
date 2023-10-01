import {useState} from 'react'; //using hooks
import './list.css';
const TodoList=()=>{
  const[todo,SetTodo]=useState([]); 
  const[input,SetInput]=useState('');
  const handlingChange=(event)=>{
    SetInput(event.target.value); //every time when user enters anything it is equal to that value
  }
  const addtodo=()=>{
    if(input.trim()){ //trim function is use to cut out extra white space
      SetTodo(todo.concat(input));//this will concate todo with input array and it store in settodo
      SetInput('');//now any text here will be cleared
    }
  }
  const deletetodo=(index)=>{
    const updatedtodo=todo.concat(); //creates a copy of todo array
    updatedtodo.splice(index,1);//removes 1 item from the specified index
    SetTodo(updatedtodo);  }
  return(
    <>
    <h1 className='list-heading'>To do List</h1>
    <input type='text' placeholder='Enter anything you wanna add' value={input} onChange={handlingChange} className='box'></input>
    <button onClick={addtodo} className='add'>Add</button>
    <ol>
      {todo.map((todo,index)=>
      <li key={index} className='list'>
     <div className='del'> {todo }  <button onClick={() => deletetodo(index)}className='delete'>Delete</button></div>

      </li>)}
    </ol>
    </>
  )
}
export default TodoList;
