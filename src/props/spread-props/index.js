import Info from './info.js';

export default function SpreadProps(_props) {
  const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};

  return (
    <Info {...pkg} />
  );
}
