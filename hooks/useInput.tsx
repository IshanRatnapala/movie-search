import { useState, useEffect } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const DELAY = 250;

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), DELAY);
    return () => clearTimeout(handler);
  }, [value]);

  return [
    debouncedValue,
    {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  ];
};

export default useInput;
