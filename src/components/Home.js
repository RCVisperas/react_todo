import React, {useState} from 'react'
import ListTodo from './List'

import ADDIcon from '../assets/addbut.png.png'


function Home() {
    const [input, setInput] = useState('');
    
    
    const [todos, setTodos] = useState([]);
   
    const submitHandler = (e) =>{
        e.preventDefault();
        const todo = {
            id:Math.floor(Math.random() * 10000),
            text: input,
            status: (false)
            
        }

        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        else{
            const newTodo = [todo, ...todos]
            setTodos(newTodo)
            console.log(...todos)
            setInput('')
 
        }
           
    }
    



    return (
        <div className="home">

            <form onSubmit={(e)=>{e.preventDefault()}}>
                 <div className="title-home-pos">
                    <h2 className="title-text">Todo List</h2>
                </div>

        <div className='btn-pos'><div className="btn-add" onClick={submitHandler} > <img src={ADDIcon} alt="Add Task" width={40}height={40}></img> </div></div>

                <div className="list-comp">
                    <ListTodo todos={todos} setTodos={setTodos}/>

                </div>
            <p> hahaah</p>
           <input className="input-style" type="text" placeholder="Add Todo" value={input} onChange={(e) => setInput(e.target.value)} 
            />
            </form>
           
        </div>
    )
}

export default Home
