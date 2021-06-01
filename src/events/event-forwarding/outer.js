import Inner from './inner.js';

/* Event forwarding is done with prop forwarding */
export default function Outer(props) {
  return (
    <Inner onMessage={props.onMessage} />
  );
}
