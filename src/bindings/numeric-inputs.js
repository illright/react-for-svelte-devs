import { useState } from 'react';
import { bind } from '../utils.js';

export default function TextInputs(_props) {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  return (
    <>
      <label>
        <input type="number" {...bind.value(a, setA)} min="0" max="10" />
        <input type="range" {...bind.value(a, setA)} min="0" max="10" />
      </label>

      <label>
        <input type="number" {...bind.value(b, setB)} min="0" max="10" />
        <input type="range" {...bind.value(b, setB)} min="0" max="10" />
      </label>

      <p>{a} + {b} = {a + b}</p>
    </>
  );
}
