import { useEffect } from 'react';

/* React hook function names must start with `use` */
export function useInterval(callback, milliseconds) {
  const interval = setInterval(callback, milliseconds);

  useEffect(() => {
    return () => clearInterval(interval);
  });
}
