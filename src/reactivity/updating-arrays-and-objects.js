import { useMemo, useState } from 'react';

/* The useState uses referential equality, so you must create a copy of an array */
export default function UpdatingArraysAndObjects(_props) {
  let [numbers, setNumbers] = useState([1, 2, 3, 4]);

  function addNumber() {
    setNumbers([...numbers, numbers.length + 1]);
  }

  let sum = useMemo(() => numbers.reduce((t, n) => t + n, 0), [numbers]);

  return (
    <>
      <p>{numbers.join(' + ')} = {sum}</p>

      <button onClick={addNumber}>
        Add a number
      </button>
    </>
  );
}
