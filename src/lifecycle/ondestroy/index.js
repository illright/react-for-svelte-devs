import { useState } from 'react';
import { useInterval } from './utils.js';

export default function Ondestroy(props) {
  const [seconds, setSeconds] = useState(0);
  useInterval(() => setSeconds(seconds + 1), 1000);

  return (
    <p>
    	The page has been open for {' '}
    	{seconds} {seconds === 1 ? 'second' : 'seconds'}
    </p>
  );
}
