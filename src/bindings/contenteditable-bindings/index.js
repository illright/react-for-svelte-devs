import { useState } from 'react';
import { bind } from '../../utils.js';
import styles from './index.module.css';

/* Preventing the caret jumps is too much work
     However, these resources might be of help:
		 - https://javascript.plainenglish.io/how-to-find-the-caret-inside-a-contenteditable-element-955a5ad9bf81
		 - https://stackoverflow.com/a/6249440/5726823
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
