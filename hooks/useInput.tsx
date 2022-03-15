import { useState, useEffect } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const DELAY = 500;

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), DELAY);
    return () => clearTimeout(handler);
  }, [value]);

  return {
    value: debouncedValue,
    setValue,
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
};

export default useInput;
