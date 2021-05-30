import { useMemo, useState } from 'react';

export default function Declarations() {
  let [count, setCount] = useState(0);
  const doubled = useMemo(() => count * 2, [count]);

  function handleClick() {
		setCount(count + 1);
	}

  return (
    <>
      <button onClick={handleClick}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
      <p>{count} doubled is {doubled}</p>
    </>
  );
}
