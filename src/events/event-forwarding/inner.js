export default function Inner(props) {
  function sayHello() {
    props.onMessage('Hello!');
	}

  return (
    <button onClick={sayHello}>
    	Click to say hello
    </button>
  );
}
