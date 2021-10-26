import React from 'react'
import deleteIcon from '../assets/DeleteIcon.png'


function Todo({text, todo, todos, setTodos, done, undone, deleted}) {

    const deleteHandler = () => {
        setTodos(todos.filter((el)=> el.id !== todo.id))
        todos.map((item) =>{
            if(item.id === todo.id){
                deleted(1)
              
            }
        })
    }
    const completeHandler = () =>{
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {
                        ...item,
                        status: !item.status
                    }
                }
               
                return item
            })
        )
        todos.map((item) => {
            if(item.id === todo.id && !item.status){
                done(1)
                console.log(item)
            }
            if(item.id === todo.id && item.status){
                undone(1)

            }
        })
        
        
    }


    return (
        <div className="todo-div">
            
            <li className="todo">
                <input 
                type="checkbox" 
                className="checkbox-round" 
                onClick={completeHandler}>

                </input>
                <label className="todo-text">{text}</label>
                <button className="delete" onClick={deleteHandler} > <img src={deleteIcon} alt="delete" ></img> </button>
                
            </li>
            
        </div>
       
    )
}

export default Todo
