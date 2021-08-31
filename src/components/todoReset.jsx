import React from 'react'

const TodoReset = (props) => {
  return (
    <>
      <button
        onClick={props.onReset}
        type="button"
        className="btn btn-warning m-2"
      >
        Сбросить
      </button>
    </>
  )
}

export default TodoReset
