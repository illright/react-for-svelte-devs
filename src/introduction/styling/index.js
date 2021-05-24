import styles from './index.module.css';

/* Can't scope non-class selectors
   Must use CSS modules for scoping */
export default function Styling(_props) {
  return (
    <p className={styles.pScoped}>This is a paragraph.</p>
  );
}
