import RemoveTodo from "./RemoveTodo"
import ToggleTodo from "./ToggleTodo"

const TodoItem = ({item}) => {
  return (
    <li className="todo__item collection-item">
      <div className={item.completed ? 'todo__text todo__text_completed' : 'todo__text'}>{item.text}</div>
      <div>
        <ToggleTodo id={item.id} />
        <RemoveTodo id={item.id} />
      </div>
    </li>
  )
}

export default TodoItem