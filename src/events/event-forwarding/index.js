import Outer from './outer.js';

export default function EventForwarding(_props) {
  function handleMessage(text) {
    alert(text);
  }

  return (
    <Outer onMessage={handleMessage} />
  );
}
