import CompoundComponent from "./CompoundComponent";
import FunctionAsChildComponent from "./FunctionAsChildComponent";
import HookComponent from "./HookComponent";
import style from "./headless.module.scss";

const Headless = () => {
  return (
    <div className={style.wrapper}>
      <h2>compound checkbox</h2>
      <CompoundComponent />
      <h2>function as child component</h2>
      <FunctionAsChildComponent />
      <h2>custom hook</h2>
      <HookComponent />
    </div>
  );
};

export default Headless;
