import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from '../redux/features/todoSlice'

const AddTodo = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  
  const clickHandler = () => {
    if(value) {
      dispatch(addTodo(value))
    }
  }

  return (
    <div>
      <input type="text" className="input" onChange={e => setValue(e.target.value)} />
      <button className="btn green" onClick={clickHandler}>Add Todo</button>
    </div>
  )
}

export default AddTodo