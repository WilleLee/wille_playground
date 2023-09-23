import { useState } from "react";

const useCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => setIsChecked(!isChecked);

  return {
    isChecked,
    onChange,
  };
};

export default useCheckbox;
