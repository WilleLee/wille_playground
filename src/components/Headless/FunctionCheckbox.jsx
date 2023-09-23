import { useState } from "react";

const FunctionCheckbox = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  if (!children || typeof children !== "function") return null;

  return children({
    isChecked,
    onChange: () => setIsChecked(!isChecked),
  });
};

export default FunctionCheckbox;
