import React, { useState } from 'react'

const TodoForm = ({ onCreate }) => {
  const [value, setValue] = useState('')
  const handleAdd = (event) => {
    event.preventDefault()
    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }
  return (
    <>
      <form onSubmit={handleAdd}>
        <label className="m-2">Новая задача:</label>
        <input
          placeholder="Название"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className="btn btn-primary m-2">
          Добавить
        </button>
      </form>
    </>
  )
}

export default TodoForm
