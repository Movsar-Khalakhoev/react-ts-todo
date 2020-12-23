import React from 'react'
import {ITodo} from "../interfaces"

type TodoListProps = {
  todos: ITodo[],
  toggleTodo(id: number): void,
  removeTodo(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, removeTodo}) => {
  if (!todos.length) {
    return <p className='center'>Задачи отсутствуют</p>
  }


  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    removeTodo(id)
  }


  return (
    <ul>
      {
        todos.map(todo => {
          const classes = ['todo', todo.completed ? 'completed' : '']
          return (
            <li className={classes.join(' ')} key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={toggleTodo.bind(null, todo.id)}
                />
                <span>{todo.title}</span>
                <i
                  className='material-icons red-text'
                  onClick={event => removeHandler(event, todo.id)}
                >delete</i>
              </label>
            </li>
          )
        })
      }
    </ul>
  )
}

export default TodoList
