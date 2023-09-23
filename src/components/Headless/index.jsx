import { useState } from "react";
import CompoundCheckboxWrapper from "./CompoundCheckbox";
import styles from "./headless.module.scss";

const Headless = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <h2>compound checkbox</h2>
      <CompoundCheckboxWrapper
        id="compound"
        isChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      >
        <CompoundCheckboxWrapper.Checkbox className="hi" />
        <CompoundCheckboxWrapper.Label className={styles.colored_label}>
          compound checkbox
        </CompoundCheckboxWrapper.Label>
      </CompoundCheckboxWrapper>
    </div>
  );
};

export default Headless;
