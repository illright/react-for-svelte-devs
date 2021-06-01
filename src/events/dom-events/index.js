import { useState } from 'react';
import styles from './index.module.css';

/* Due to mounting this component to #root, `height: 100%` doesn't work */
export default function DOMEvents(_props) {
  const [m, setM] = useState({ x: 0, y: 0 });

  function handleMousemove(event) {
    setM({ x: event.clientX, y: event.clientY });
	}

  return (
    <div className={styles.mouseTracker} onMouseMove={handleMousemove}>
    	The mouse position is {m.x} x {m.y}
    </div>
  );
}
