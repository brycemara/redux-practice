import React from 'react'
import { connect } from 'react-redux'
import ToDo from '../components/ToDo'

const ToDoList = ({todos}) => {

  const displayToDos = todos.map(todo => {
    return(
      <ToDo 
      {...todo}
      key={todo.id}
      />
    )
  })

  return(
    <ul>
      {displayToDos}
    </ul>
  )
}

const maptStateToProps = state => ({
  todos: state.todos
})

export default connect(maptStateToProps)(ToDoList);