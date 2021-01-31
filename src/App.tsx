import { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const initialTodos: Array<Todo> = [
  { text: "Something to do", complete: true },
  { text: "Something to do2", complete: false },
  { text: "Something to do3", complete: true },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, complete: false }]);
  };
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
