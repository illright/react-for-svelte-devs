import { useState } from 'react';
import styles from './index.module.css';

/* Inline handlers are nothing to be afraid of */
export default function InlineHandlers(_props) {
  const [m, setM] = useState({ x: 0, y: 0 });

  return (
    <div
      className={styles.mouseTracker}
      onMouseMove={e => setM({ x: e.clientX, y: e.clientY })}
    >
    	The mouse position is {m.x} x {m.y}
    </div>
  );
}
