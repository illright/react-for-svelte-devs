import { useState } from 'react';

/* JavaScript's `if` statements can not be used within a return so it's up
     to logical and conditional operators */
export default function IfBlocks(_props) {
  const [user, setUser] = useState({ loggedIn: false });

	function toggle() {
    setUser({
      loggedIn: !user.loggedIn
    });
	}

  return (
    <>
      {user.loggedIn
        && <button onClick={toggle}>Log out</button>
      }
      {!user.loggedIn
        && <button onClick={toggle}>Log in</button>
      }
    </>
  );
}
