import ReactDOM from 'react-dom';
import * as events from './events/index.js';


ReactDOM.render(
  <events.DOMEventForwarding />,
  document.getElementById('root')
);
