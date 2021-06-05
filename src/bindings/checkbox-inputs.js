import { useState } from 'react';
import { bind } from '../utils.js';

export default function CheckboxInputs(_props) {
  const [yes, setYes] = useState(false);
  return (
    <>
      <label>
        <input type="checkbox" {...bind.checked(yes, setYes)} />
        Yes! Send me regular email spam
      </label>
      {yes
        ? <p>Thank you. We will bombard your inbox and sell your personal details.</p>
        : <p>You must opt in to continue. If you're not paying, you're the product.</p>
      }
      <button disabled={!yes}>
        Subscribe
      </button>
    </>
  );
}
