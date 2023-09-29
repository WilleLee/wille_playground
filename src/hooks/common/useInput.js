import { useCallback, useState } from "react";

const useInput = (handleSubmit) => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      handleSubmit?.(value);
      setValue("");
    },
    [handleSubmit, value]
  );
  return {
    value,
    onChange,
    onSubmit,
  };
};

export default useInput;
