/* Keys are required for loop children, or else there will be a warning
   Can't interpolate strings in JSX (already forgot) */
export default function EachBlocks(_props) {
  let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];

  return (
    <>
      <h1>The Famous Cats of YouTube</h1>
      <ul>
        {cats.map((cat, i) => (
          <li key={cat.id}>
            <a target="_blank" href={`https://www.youtube.com/watch?v=${cat.id}`} rel="noreferrer">
              {i + 1}: {cat.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
