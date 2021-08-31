import React from 'react'

const TodoItem = (props) => {
  const classes = []
  if (props.task.completed) {
    classes.push('text-decoration-line-through')
  }
  return (
    <>
      <div className="d-flex justify-content-between align-items-center border border-2 border-info m-2">
        <div key={props.task.id} className={classes.join(' ')}>
          <input
            onChange={() => props.onCheck(props.task.id)}
            type="checkbox"
            className="m-2"
            checked={props.task.completed}
          />
          {props.task.id}.{props.task.name}
        </div>
        <button
          onClick={() => props.onDelete(props.task.id)}
          className="btn btn-sm btn-danger m-2"
        >
          Удалить
        </button>
      </div>
    </>
  )
}

export default TodoItem
