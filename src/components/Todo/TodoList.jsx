import { VAC } from "react-vac";
import TodoListView from "./TodoListView";
import { useCallback, useMemo } from "react";

const TodoList = ({ list, handleCheck, handleRemove }) => {
  const each = useCallback(
    (item) => ({
      ...item,
      onCheck: () => handleCheck?.(item.id),
      onRemove: () => handleRemove?.(item.id),
    }),
    [handleCheck, handleRemove]
  );

  const todoListViewProps = useMemo(
    () => ({
      list,
      each,
    }),
    [list, each]
  );
  return (
    <>
      <TodoListView {...todoListViewProps} />
      <VAC data={todoListViewProps} useList="list" useEach="each" />
    </>
  );
};

export default TodoList;
