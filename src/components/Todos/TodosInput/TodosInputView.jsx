import TextInput from "../../inputs/TextInput";

const TodosInputView = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextInput value={value} onChange={onChange}>
        <TextInput.Input />
      </TextInput>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodosInputView;
