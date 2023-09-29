import { useMemo } from "react";
// import VAC from "react-vac";
import TodosListView from "./TodosListView";

const TodosList = ({ todos, handleToggleCheck, handleRemoveTodo }) => {
  const TodosListViewProps = useMemo(
    () => ({
      todos,
      each: (data) => {
        return {
          id: data.id,
          text: data.text,
          isCompleted: data.isCompleted,
          handleToggleCheck: () => {
            handleToggleCheck?.(data.id);
          },
          handleRemoveTodo: () => {
            handleRemoveTodo?.(data.id);
          },
        };
      },
    }),
    [todos, handleToggleCheck, handleRemoveTodo]
  );
  return (
    <>
      <TodosListView {...TodosListViewProps} />
      {/* <VAC
        name="TodosList"
        data={TodosListViewProps}
        useList="todos"
        useEach="each"
      /> */}
    </>
  );
};

export default TodosList;
