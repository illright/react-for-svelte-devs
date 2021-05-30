export default function Nested(props) {
  return (
    <p>The answer is {props.answer}</p>
  );
}

Nested.defaultProps = {
  answer: 'a mystery',
};
