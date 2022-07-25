import { useDispatch } from "react-redux"
import { removeTodo } from "../redux/features/todoSlice"

const RemoveTodo = ({id}) => {
  const dispatch = useDispatch()

  return (
    <button className="btn red" style={{marginLeft: 10}} onClick={() => dispatch(removeTodo(id))}>Remove Todo</button>
  )
}

export default RemoveTodo