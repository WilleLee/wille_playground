import { useState } from "react";
import CompoundCheckboxWrapper from "./CompoundCheckboxWrapper";

const CompoundComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <CompoundCheckboxWrapper
        id="compound"
        isChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      >
        <CompoundCheckboxWrapper.Checkbox className="hi" />
        <CompoundCheckboxWrapper.Label>
          compound checkbox
        </CompoundCheckboxWrapper.Label>
      </CompoundCheckboxWrapper>
    </div>
  );
};

export default CompoundComponent;
