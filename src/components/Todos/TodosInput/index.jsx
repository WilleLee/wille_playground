import { useMemo } from "react";
// import VAC from "react-vac";
import TodosInputView from "./TodosInputView";
import useInput from "../../../hooks/common/useInput";

const TodosInput = ({ addTodo }) => {
  const { value, onChange, onSubmit } = useInput(addTodo);
  const TodosInputViewProps = useMemo(
    () => ({
      value,
      onChange,
      onSubmit,
    }),
    [value, onChange, onSubmit]
  );
  return (
    <>
      <TodosInputView {...TodosInputViewProps} />
      {/* <VAC
        name="TodosInput"
        data={TodosInputViewProps}
        useValue="value"
        onChange="onChange"
        onSubmit="onChange"
      /> */}
    </>
  );
};

export default TodosInput;
