import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}
export default function TodoList({ todos, toggleTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}
