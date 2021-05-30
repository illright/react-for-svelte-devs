import { useState } from 'react';

/* Class components feature a lot of boilerplate, so nested functions it is */
export default function Assignments() {
  let [count, setCount] = useState(0);

  function handleClick() {
		setCount(count + 1);
	}

  return (
    <button onClick={handleClick}>
      Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
  );
}
