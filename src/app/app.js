import React, { useState } from 'react'
import TodoTitle from '../components/todoTitle'
import TodoItems from '../components/todoItems'
import { todoList } from './todoList'
import TodoForm from '../components/todoForm'

const App = () => {
  const [tasks, setTasks] = useState(todoList)
  const handleReset = () => {
    console.log('handleReset')
    setTasks([])
  }

  const handleDelete = (id) => {
    console.log('handleDelete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const handleCheck = (id) => {
    console.log('handleCheck', id)
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      })
    )
  }
  const addTask = (name) => {
    setTasks(
      tasks.concat([
        {
          name,
          id: tasks.length + 1,
          completed: false,
        },
      ])
    )
  }

  return (
    <>
      <div className="container">
        <TodoTitle />
        <TodoForm onCreate={addTask} />
        <TodoItems
          tasks={tasks}
          onDelete={handleDelete}
          onReset={handleReset}
          onCheck={handleCheck}
        />
      </div>
    </>
  )
}

export default App
