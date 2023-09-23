import FunctionCheckbox from "./FunctionCheckbox";

const FunctionAsChildComponent = () => {
  return (
    <FunctionCheckbox>
      {({ isChecked, onChange }) => {
        return (
          <div>
            <input
              type="checkbox"
              id="functionCheck"
              name="functionCheck"
              checked={isChecked}
              onChange={onChange}
            />
            <label htmlFor="functionCheck">function as child component</label>
          </div>
        );
      }}
    </FunctionCheckbox>
  );
};

export default FunctionAsChildComponent;
