import React from "react";

/**
 * @typedef {object} InputProps
 * @property {string} value
 * @property {string} placeholder
 * @property {function} onChange
 */

const initialState = {
  value: "",
  placeholder: "",
  onChange: () => {},
};

const TextInputContext = React.createContext(initialState);

const useTextInputContext = () => {
  const context = React.useContext(TextInputContext);
  return context;
};

/**
 *
 * @param {InputProps & React.PropsWithChildren<{}>} props
 * @returns
 */
const TextInput = ({ children, value, onChange, placeholder }) => {
  const values = {
    value,
    onChange,
    placeholder,
  };

  return (
    <TextInputContext.Provider value={values}>
      {children}
    </TextInputContext.Provider>
  );
};

const Input = ({ ...props }) => {
  const { value, onChange, placeholder } = useTextInputContext();
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

TextInput.Input = Input;

export default TextInput;
