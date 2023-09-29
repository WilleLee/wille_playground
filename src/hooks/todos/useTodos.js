import { useReducer } from "react";

const useTodos = () => {
  const reducers = (state, action) => {
    switch (action.type) {
      case "ADD_TODO": {
        const newTodo = {
          id: Date.now(),
          text: action.payload,
          isCompleted: false,
        };
        return [...state, newTodo];
      }
      case "TOGGLE_CHECK": {
        const { id } = action.payload;
        return state.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return todo;
        });
      }
      case "REMOVE_TODO": {
        const { id } = action.payload;
        return state.filter((todo) => todo.id !== id);
      }

      default:
        return state;
    }
  };
  const [todos, dispatch] = useReducer(reducers, []);

  const actions = {
    addTodo: (value) => {
      dispatch({
        type: "ADD_TODO",
        payload: value,
      });
    },
    toggleCheck: (id) => {
      dispatch({
        type: "TOGGLE_CHECK",
        payload: { id },
      });
    },
    removeTodo: (id) => {
      dispatch({
        type: "REMOVE_TODO",
        payload: { id },
      });
    },
  };

  return [todos, actions];
};

export default useTodos;
