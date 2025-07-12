import type {Todo} from "./typs/Todo.ts";
import {useState} from "react";

const TodoApp=()=>{
    const [todos,setTodos]=useState<Todo[]>([])

    const [input,setInput]=useState<string>(" ")
    const handleAddTodo = ()=>{
        const newTodo={
            id:todos.length+1,
            text:input,
        }
        setTodos((prevTodos)=>[...prevTodos,newTodo])
        setInput("")
    }
    const handleDeleteTodo = (id:number)=>{
      setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id !== id))
    }
    return(
        <div  className='max-w-md mx-auto mt-8 p-4 bg-gray-400 rounded shadow' >
            <h1 className='text-2xl font-bold mb-4'>Todo App</h1>
            <div className='flex mb-4' >
                <input value={input} onChange={(e)=> setInput(e.target.value)} className='flex-1 px-2 py-1 border rounded mr-2'/>
                <button onClick={handleAddTodo} className='px-4 py-1 bg-blue-600 text-white rounded-4xl'>Add Todo</button>
            </div>
            <ul>
                {todos.map((todo:Todo)=>(
                    <li className='flex item s-center mb-2 p-2 bg-white rounded' key={todo.id}>
                        <span>{todo.id} {todo.text}</span>
                        <button onClick={()=>handleDeleteTodo(todo.id)} className='ml-2 px-2 py-1 bg-red-600 text-white rounded-4xl '>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoApp