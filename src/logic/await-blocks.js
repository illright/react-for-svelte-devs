import { useState } from 'react';
import Async from 'react-async';

async function getRandomNumber() {
  const res = await fetch(`https://svelte.dev/tutorial/random-number`);
  const text = await res.text();

  if (res.ok) {
    return text;
  } else {
    throw new Error(text);
  }
}

/* Only React components and strings are allowed to be returned as children,
     React won't simply create a string representation of any object
   No built-in way of handling promises, without React Async each promise
     would have to be accompanied with a state variable of its status */
export default function AwaitBlocks(_props) {
  let [promise, setPromise] = useState(getRandomNumber());

  function handleClick() {
    setPromise(getRandomNumber());
  }

  return (
    <>
      <button onClick={handleClick}>
        generate random number
      </button>

      <Async promise={promise}>
        <Async.Pending>
          <p>...waiting</p>
        </Async.Pending>
        <Async.Fulfilled>
          {number =>
            (<p>The number is {number}</p>)
          }
        </Async.Fulfilled>
        <Async.Rejected>
          {error =>
            (<p style={{ color: 'red' }}>{error.message}</p>)
          }
        </Async.Rejected>
      </Async>
    </>
  )
}
