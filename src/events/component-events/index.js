import Inner from './inner.js';

/* Custom events are handled with handler callbacks coming from props */
export default function ComponentEvents(_props) {
  function handleMessage(text) {
		alert(text);
	}

  return (
    <Inner onMessage={handleMessage} />
  );
}
