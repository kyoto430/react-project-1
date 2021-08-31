import React from 'react'

import TodoItem from './todoItem'
import TodoReset from './todoReset'

const TodoItems = (props) => {
  return (
    <>
      {props.tasks.length > 0 ? (
        props.tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={props.onDelete}
            onCheck={props.onCheck}
          />
        ))
      ) : (
        <p className="m-2">Нет задач!</p>
      )}

      <TodoReset onReset={props.onReset} />
    </>
  )
}

export default TodoItems
