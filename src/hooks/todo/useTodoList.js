import { useReducer } from "react";

/**
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} text
 * @property {boolean} isChecked
 */

const useTodoList = () => {
  const reducers = (state, action) => {
    switch (action.type) {
      case "ADD_TODO": {
        const text = action.payload;
        const id = new Date().getTime();
        console.log(typeof id);
        const isChecked = false;
        const newTodo = { id, text, isChecked };
        console.log("new todo: ", newTodo);
        return [...state, newTodo];
      }
      case "TOGGLE_CHECK": {
        const id = action.payload;
        const newState = state.map((todo) => {
          if (todo.id === id) {
            todo.isChecked = !todo.isChecked;
          }
          return todo;
        });
        return newState;
      }
      case "REMOVE_TODO": {
        const id = action.payload;
        const newState = state.filter((todo) => todo.id !== id);
        return newState;
      }
      default:
        return state;
    }
  };

  const [list, dispatch] = useReducer(reducers, []);

  const actions = {
    addTodo: (text) => dispatch({ type: "ADD_TODO", payload: text }),
    toggleCheck: (id) => dispatch({ type: "TOGGLE_CHECK", payload: id }),
    removeTodo: (id) => dispatch({ type: "REMOVE_TODO", payload: id }),
  };

  return [list, actions];
};

export default useTodoList;
