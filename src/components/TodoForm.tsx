import React, {useState} from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
  const [inputValue, setInputValue] = useState<string>('')

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className='input-field mt2'>
      <input
        type="text"
        id='title'
        value={inputValue}
        onChange={changeInputHandler}
        onKeyPress={keyPressHandler}
        placeholder='Введите задачу'
      />
      <label htmlFor="title" className='active'>Введите задачу</label>
    </div>
  )
}

export default TodoForm
