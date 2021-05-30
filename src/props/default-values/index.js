import Nested from './nested.js';

export default function DefaultValues(_props) {
  return (
    <>
      <Nested answer={42} />
      <Nested />
    </>
  );
}
