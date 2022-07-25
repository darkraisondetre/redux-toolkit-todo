import { useDispatch } from "react-redux"
import { toggleCompleteTodo } from "../redux/features/todoSlice"

const ToggleTodo = ({id}) => {
  const dispatch = useDispatch()
  return (
    <button className="btn blue" onClick={() => dispatch(toggleCompleteTodo(id))}>Toggle Todo</button>
  )
}

export default ToggleTodo