import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {

    const {todos, selectedTab} = props;

    
    const filterTodosList = selectedTab === 'All' ?
        todos : 
        selectedTab === 'Completed' ?
        todos.filter(val => val.complete) :
        todos.filter(val => !val.complete);


  return (
    <>
        {filterTodosList.map((todo, todoIndex)=>{
            return (
                <TodoCard 
                key={todoIndex} 
                todoIndex={todos.findIndex(val => val.input == todo.input)}
                {...props}
                todo={todo} />
            )
        })}
    </>
  )
}

export default TodoList