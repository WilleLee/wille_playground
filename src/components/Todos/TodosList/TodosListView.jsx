import CheckBox from "../../inputs/CheckBox";
import React from "react";

const TodosListView = ({ todos, each }) => {
  return (
    <div>
      {todos?.map((todo) => {
        const { id, text, isCompleted, handleToggleCheck, handleRemoveTodo } =
          each(todo);
        return (
          <TodosItem
            key={id}
            text={text}
            isCompleted={isCompleted}
            handleToggleCheck={handleToggleCheck}
            handleRemoveTodo={handleRemoveTodo}
          />
        );
      })}
    </div>
  );
};

const TodosItem = React.memo(
  ({ text, isCompleted, handleToggleCheck, handleRemoveTodo }) => {
    return (
      <div>
        <CheckBox isChecked={isCompleted} onChange={handleToggleCheck}>
          <CheckBox.Input />
        </CheckBox>
        <span>{text}</span>
        <span style={{ marginLeft: "4px" }} onClick={handleRemoveTodo}>
          x
        </span>
      </div>
    );
  }
);

export default TodosListView;
