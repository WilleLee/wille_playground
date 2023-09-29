import { useMemo } from "react";
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";
import useTodos from "../../hooks/todos/useTodos";

const Todos = () => {
  const [todos, { addTodo, toggleCheck, removeTodo }] = useTodos();

  const todosListProps = useMemo(
    () => ({
      todos,
      handleToggleCheck: (id) => {
        toggleCheck?.(id);
      },
      handleRemoveTodo: (id) => {
        removeTodo?.(id);
      },
    }),
    [todos, toggleCheck, removeTodo]
  );

  return (
    <div>
      <h2>Todo List</h2>
      <TodosInput addTodo={addTodo} />
      <TodosList {...todosListProps} />
    </div>
  );
};

export default Todos;
