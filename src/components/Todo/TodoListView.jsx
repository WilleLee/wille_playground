import React from "react";

const TodoListView = ({ list, each }) => {
  return (
    <div>
      {list.map((item) => {
        return <TodoItem key={item.id} item={item} each={each} />;
      })}
    </div>
  );
};

const TodoItem = React.memo(({ item, each }) => {
  const { isChecked, text, onCheck, onRemove } = each(item);
  return (
    <div>
      <input type="checkbox" checked={isChecked} onClick={onCheck} />
      <span>{text}</span>
      <span style={{ marginLeft: "4px" }} onClick={onRemove}>
        x
      </span>
    </div>
  );
});

export default TodoListView;
