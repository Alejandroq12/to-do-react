import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

function TodoItem() {
  return (
    <div>
      <li>
        <span>V</span>
        <p>Estudiar reac.js una hora</p>
        <span>X</span>
      </li>
    </div>
  );
}

export default App;
