/* Can't interpolate strings in JSX
   Can't use property shorthands */
export default function DynamicAttributes(_props) {
  let src = 'http://placekitten.com/200/300';
  let character = 'kitten';

  return (
    <img src={src} alt={`A cute ${character}`} />
  );
}
