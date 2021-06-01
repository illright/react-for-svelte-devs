import { useState } from 'react';

export default function ElseBlocks(_props) {
  const [user, setUser] = useState({ loggedIn: false });

	function toggle() {
    setUser({
      loggedIn: !user.loggedIn
    });
	}

  return (
    user.loggedIn
      ? <button onClick={toggle}>Log out</button>
      : <button onClick={toggle}>Log in</button>
  );
}
