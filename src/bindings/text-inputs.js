import { useState } from 'react';
import { bind } from '../utils.js';

/* There is no two-way binding in React
   Bind can be imitated using spread props as shown above */
export default function TextInputs(_props) {
  const [name, setName] = useState('world');

  return (
    <>
      <input {...bind.value(name, setName)} />

      <h1>Hello {name}!</h1>
    </>
  );
}
