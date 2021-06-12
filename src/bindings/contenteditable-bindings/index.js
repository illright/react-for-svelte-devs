import { useState } from 'react';
import { bind } from '../../utils.js';
import styles from './index.module.css';

/* Preventing the caret jumps is too much work
     However, this Stack Overflow answer might be of help:
		 - https://stackoverflow.com/a/62700928/5726823
	 No way of setting textContent */
export default function ContenteditableBindings(_props) {
	let [html, setHtml] = useState('<p>Write some text!</p>');
	return (
		<>
			<div
				className={styles.textField}
				contentEditable
				{...bind.innerHTML(html, setHtml)}
			/>
			<pre>{html}</pre>
		</>
	);
}
