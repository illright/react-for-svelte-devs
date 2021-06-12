import { useEffect, useState } from 'react';
import styles from './index.module.css';


/* No else blocks for loops in React
   Async operations inside useEffect should be in an IIFE */
export default function Onmount(_props) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
      setPhotos(await res.json());
    })();
	}, []);

  return (
    <>
      <h1>Photo album</h1>

      <div className={styles.photos}>
      	{photos.length > 0
          ? photos.map(photo => (
          		<figure>
          			<img src={photo.thumbnailUrl} alt={photo.title} />
          			<figcaption>{photo.title}</figcaption>
          		</figure>
            ))
          : (<p>loading...</p>)
        }
      </div>
    </>
  );
}
