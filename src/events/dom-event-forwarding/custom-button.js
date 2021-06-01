import styles from './custom-button.module.css';

export default function CustomButton(props) {
  return (
    <button className={styles.customButton} onClick={props.onClick}>
      Click me
    </button>
  );
}
