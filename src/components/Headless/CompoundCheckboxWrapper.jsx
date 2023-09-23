import React from "react";

/**
 * @typedef {object} CompoundCheckboxProps
 * @property {boolean} isChecked
 * @property {function} onChange
 * @property {string} id
 */

/**
 * @type {CompoundCheckboxProps}
 */
const initialState = {
  isChecked: false,
  onChange: () => {},
  id: "",
};

const CheckboxContext = React.createContext(initialState);

const useCheckboxContext = () => {
  const context = React.useContext(CheckboxContext);
  return context;
};

/**
 * @param {CompoundCheckboxProps & React.PropsWithChildren<{}>} props
 * @returns
 */
const CompoundCheckboxWrapper = ({ children, isChecked, onChange, id }) => {
  /**
   * @type {CompoundCheckboxProps}
   */
  const value = {
    isChecked,
    onChange,
    id,
  };
  return (
    <CheckboxContext.Provider value={value}>
      {children}
    </CheckboxContext.Provider>
  );
};

const Checkbox = ({ ...props }) => {
  const { id, isChecked, onChange } = useCheckboxContext();
  return (
    <input
      type="checkbox"
      id={id}
      name={id}
      checked={isChecked}
      onChange={onChange}
      {...props}
    />
  );
};

/**
 *
 * @param {React.PropsWithChildren<{}>} props
 * @returns
 */
const Label = ({ children, ...props }) => {
  const { id } = useCheckboxContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

CompoundCheckboxWrapper.Checkbox = Checkbox;
CompoundCheckboxWrapper.Label = Label;

export default CompoundCheckboxWrapper;
