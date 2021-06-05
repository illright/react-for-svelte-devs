import { useMemo, useState } from 'react';
import Keypad from './keypad.js';

/* There's no way to make two-way bindings to components */
export default function ComponentBindings(_props) {
	const [pin, setPin] = useState(null);
	const view = useMemo(() => pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin', [pin]);

	function handleSubmit() {
		alert(`submitted ${pin}`);
	}

  return (
    <>
      <h1 style={{ color: pin ? '#333' : '#ccc' }}>{view}</h1>
      <Keypad onSubmit={handleSubmit} onChange={setPin} />
    </>
  );
}
