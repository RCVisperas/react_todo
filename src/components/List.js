import React, {useState} from 'react'
import Todo from './Todo'


function ListTodo({todos, setTodos}) {

    let totalUnfinish = [...todos].length
    console.log(totalUnfinish)
    const [counter, setCounter] = useState(0)
    console.log(counter)



    // Call back function used to get data from the Child Component
    const done = num =>{
        setCounter(counter + num)
        
            
    }
    const undone = num => {
        if(counter > 0){
            setCounter(counter - num)
        }
        else{
            return
        }
      
       
    }

    const deleted = del => {
        if(counter > 0){
            setCounter(counter - del)
        }
        else{
            return
        }
    }

    

    return (
        <div className="list-todo">
            <div className="task-remaining">{totalUnfinish - counter} Unfinished Task</div>
            <ul className="list-org">
                {todos.map((todo)=> (
                    <Todo 
                    text={todo.text} 
                    key={todo.id}
                    todo={todo} 
                    todos={todos} 
                    setTodos={setTodos}
                    done={done}
                    undone={undone}
                    deleted={deleted}
                    />
                    
                ))}
            </ul>
        </div>
        


    )
}

export default ListTodo
