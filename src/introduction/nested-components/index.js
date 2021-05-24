import Nested from './nested.js';
import styles from './index.module.css';

/* Fragments are required to return multiple adjacent tags
   Importing React isn't necessary anywhere in the app */
export default function NestedComponents(_props) {
  return (
    <>
      <p className={styles.pScoped}>This is a paragraph.</p>
      <Nested />
    </>
  );
}
