import React from "react";
import TodoInputView from "./TodoInputView";
import useTodoInputProps from "../../hooks/useInputProps";
// import { VACInput } from "react-vac";

const TodoInput = ({ handleSubmit }) => {
  const todoInputViewProps = useTodoInputProps(handleSubmit);

  return (
    <>
      <TodoInputView {...todoInputViewProps} />
      {/* <VACInput name="TodoInputView" data={todoInputViewProps} /> */}
    </>
  );
};

export default React.memo(TodoInput);
