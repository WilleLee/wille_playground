import React from "react";

/**
 * @typedef {object} CheckBoxProps
 * @property {boolean} isChecked
 * @property {Function} onChange
 */

const initialState = {
  isChecked: false,
  onChange: () => {},
};

const CheckBoxContext = React.createContext(initialState);

const useCheckBoxContext = () => {
  const context = React.useContext(CheckBoxContext);
  return context;
};

/**
 *
 * @param {CheckBoxProps & React.PropsWithChildren<{}>} props
 * @returns
 */
const CheckBox = ({ isChecked, onChange, children }) => {
  const values = {
    isChecked,
    onChange,
  };
  return (
    <CheckBoxContext.Provider value={values}>
      {children}
    </CheckBoxContext.Provider>
  );
};

const Input = ({ ...props }) => {
  const { isChecked, onChange } = useCheckBoxContext();
  return (
    <input type="checkbox" checked={isChecked} onChange={onChange} {...props} />
  );
};

CheckBox.Input = Input;

export default CheckBox;
