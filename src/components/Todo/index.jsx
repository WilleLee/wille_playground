import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import useTodoList from "../../hooks/todo/useTodoList";

const Todo = () => {
  const [list, { addTodo, toggleCheck, removeTodo }] = useTodoList();
  const todoInputProps = {
    handleSubmit: (value) => {
      addTodo?.(value);
    },
  };
  const todoListProps = {
    list,
    handleCheck: (id) => {
      toggleCheck?.(id);
    },
    handleRemove: (id) => {
      removeTodo?.(id);
    },
  };
  return (
    <div>
      <h2>Todo List</h2>
      <TodoInput {...todoInputProps} />
      <TodoList {...todoListProps} />
    </div>
  );
};

export default Todo;
