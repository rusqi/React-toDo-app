import React, { useState, createContext } from 'react'
import Todos from './components/Todos' 
import TodoForm from './components/TodoForm'

export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',  
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }
  
  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
    <div style={{ textAlign: 'center', padding: '12px' }}>
      <h1 style={{fontSize: '36px'}}>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos}/>
    </div>
    </TodoContext.Provider>
  )
}

export default App