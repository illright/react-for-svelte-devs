import { useEffect, useState } from 'react';

/* Effects only run **after** the render, so unlike the Svelte version,
     this one produces a counter value of 10 for a split second */
export default function Statements() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 10) {
  		alert(`count is dangerously high!`);
  		setCount(9);
    }
	}, [count])

  function handleClick() {
		setCount(count + 1);
	}

  return (
    <>
      <button onClick={handleClick}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </>
  );
}
