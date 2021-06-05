import { useMemo, useState } from 'react';
import { classes, bind, setField } from '../../utils.js';
import styles from './index.module.css';

export default function EachBlockBindings(_props) {
  const [todos, setTodos] = useState([
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' },
	]);

	function add() {
		setTodos(todos.concat({ done: false, text: '' }));
	}

	function clear() {
		setTodos(todos.filter(t => !t.done));
	}

	const remaining = useMemo(() => todos.filter(t => !t.done).length, [todos]);

  return (
    <>
      <h1>Todos</h1>

      {todos.map(todo => (
      	<div className={classes([todo.done && styles.done])}>
      		<input
      			type="checkbox"
      			{...bind.checked(todo.done, x => setTodos(todos.map(setField('done', x, todo))))}
      		/>

      		<input
      			placeholder="What needs to be done?"
      			{...bind.value(todo.text, x => setTodos(todos.map(setField('text', x, todo))))}
      		/>
      	</div>
      ))}

      <p>{remaining} remaining</p>

      <button onClick={add}>
      	Add new
      </button>

      <button onClick={clear}>
      	Clear completed
      </button>
    </>
  )
}
