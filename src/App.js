import './assets/scss/app.scss'
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <main className="main section">
      <div className="container">
        <Todo />
        <AddTodo />
      </div>
    </main>
  );
}

export default App
