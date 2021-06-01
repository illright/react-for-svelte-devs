import { useState } from 'react';
import Thing from './thing.js';

export default function KeyedEachBlocks(_props) {
	const [things, setThings] = useState([
		{ id: 1, color: 'darkblue' },
		{ id: 2, color: 'indigo' },
		{ id: 3, color: 'deeppink' },
		{ id: 4, color: 'salmon' },
		{ id: 5, color: 'gold' }
	]);

	function handleClick() {
		setThings(things.slice(1));
	}

  return (
    <>
      <button onClick={handleClick}>
        Remove first thing
      </button>

      {things.map(thing => (
      	<Thing current={thing.color} key={thing.id} />
      ))}
    </>
  )
}
