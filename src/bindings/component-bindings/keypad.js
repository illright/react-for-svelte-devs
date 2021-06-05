import { useEffect, useState } from 'react';
import styles from './keypad.module.css';

export default function Keypad(props) {
  const { onChange, onSubmit } = props;
  const [value, setValue] = useState('');

  useEffect(() => onChange(value), [value, onChange]);

  const select = num => () => setValue(value + num);
  const clear  = () => setValue('');

  return (
    <div className={styles.keypad}>
      <button onClick={select(1)}>1</button>
      <button onClick={select(2)}>2</button>
      <button onClick={select(3)}>3</button>
      <button onClick={select(4)}>4</button>
      <button onClick={select(5)}>5</button>
      <button onClick={select(6)}>6</button>
      <button onClick={select(7)}>7</button>
      <button onClick={select(8)}>8</button>
      <button onClick={select(9)}>9</button>

      <button disabled={!value} onClick={clear}>clear</button>
      <button onClick={select(0)}>0</button>
      <button disabled={!value} onClick={onSubmit}>submit</button>
    </div>
  );
}
