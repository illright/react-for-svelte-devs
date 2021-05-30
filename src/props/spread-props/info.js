/* JSX doesn't treat newlines as whitespace so it has to be added explicitly */
export default function Info(props) {
  return (
    <p>
    	The <code>{props.name}</code> package is {props.speed} fast.
    	Download version {props.version} from {' '}
      <a href="https://www.npmjs.com/package/{name}">npm</a> {' '}
    	and <a href={props.website}>learn more here</a>
    </p>
  );
}
