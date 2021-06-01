import CustomButton from './custom-button.js';

export default function DOMEventForwarding(_props) {
  function handleClick() {
		alert('Button Clicked');
	}

  return (
    <CustomButton onClick={handleClick} />
  );
}
