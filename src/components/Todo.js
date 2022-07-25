import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const Todo = () => {
  const items = useSelector(state => state.todo.items)
  return (
    <div className="todo">
      <ul className="collection with-header">
        <li className="collection-header">Todo List</li>
        {
          items?.map((item) => (
            <TodoItem item={item} key={item.id}/>
          ))
        }
      </ul>
    </div>
  )
}

export default Todo