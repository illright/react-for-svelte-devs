import marked from 'marked';
import { useState } from 'react';
import { Markup } from 'interweave';
import { bind } from '../../utils.js';
import styles from './index.module.css';

export default function TextareaInputs(_props) {
  let [value, setValue] = useState('Some words are *italic*, some are **bold**');
  return (
    <>
      <textarea
        className={styles.textareaScoped}
        {...bind.value(value, setValue)}
      />

      <Markup content={marked(value)} />
    </>
  );
}
