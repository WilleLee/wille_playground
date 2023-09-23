import useCheckbox from "../../hooks/headless/useCheckbox";

const HookComponent = () => {
  const { onChange, isChecked } = useCheckbox();
  return (
    <div>
      <input
        type="checkbox"
        id="hookCheck"
        name="hookCheck"
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor="hookCheck">hook component</label>
    </div>
  );
};

export default HookComponent;
