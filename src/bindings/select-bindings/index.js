import { useState } from 'react';
import { bind, preventDefault } from '../../utils.js';
import styles from './index.module.css';

/* This implementation of `bind` minds that the values are strings
   You can't rely on `bind` to pre-select the first value in the list */
export default function SelectBindings(_props) {
  let questions = [
		{ id: 1, text: `Where did you go to school?` },
		{ id: 2, text: `What is your mother's name?` },
		{ id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
	];

	let [selected, setSelected] = useState(JSON.stringify(questions[0]));

	let [answer, setAnswer] = useState('');

	function handleSubmit() {
    const selectedParsed = JSON.parse(selected);
		alert(`answered question ${selectedParsed.id} (${selectedParsed.text}) with "${answer}"`);
	}

  return (
    <>
      <h2>Insecurity questions</h2>

      <form onSubmit={preventDefault(handleSubmit)}>
      	<select {...bind.value(selected, setSelected, { onChange: () => setAnswer('') })}>
      		{questions.map(question => (
      			<option value={JSON.stringify(question)} key={question.id}>
      				{question.text}
      			</option>
      		))}
      	</select>

      	<input className={styles.inputScoped} {...bind.value(answer, setAnswer)} />

      	<button disabled={!answer} type="submit">
      		Submit
      	</button>
      </form>

      <p>selected question {selected ? JSON.parse(selected).id : '[waiting...]'}</p>
    </>
  );
}
