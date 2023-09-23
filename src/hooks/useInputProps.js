import { useCallback, useMemo, useState } from "react";

const useInputProps = (handleSubmit) => {
  const [value, setValue] = useState("");

  const submit = useCallback(() => {
    if (!value) return;
    handleSubmit?.(value);
    setValue("");
  }, [value, handleSubmit]);

  const props = useMemo(
    () => ({
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
      onSubmit: () => {
        submit();
      },
      onKeyDown: (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          submit();
        }
      },
    }),
    [value, submit]
  );

  return props;
};

export default useInputProps;
