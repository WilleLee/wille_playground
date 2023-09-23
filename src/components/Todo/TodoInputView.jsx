const TodoInputView = ({ value, onChange, onSubmit, onKeyDown }) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="할 일을 입력해주세요."
        type="text"
      />
      <button onClick={onSubmit}>등록</button>
    </div>
  );
};

export default TodoInputView;
