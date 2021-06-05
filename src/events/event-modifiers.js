import { once } from '../utils.js'

/* The best we can do to imitate event modifiers is to decorate handlers
   Passive events are not even supported by React */
export default function EventModifiers(_props) {
  function handleClick() {
		alert('clicked')
	}

  return (
    <button onClick={once(handleClick)}>
      Click me
    </button>
  );
}
