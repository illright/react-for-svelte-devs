import { useEffect, useRef } from 'react';
import styles from './index.module.css';

export default function BindThis(_props) {
  const canvas = useRef();

  useEffect(() => {
		const ctx = canvas.current.getContext('2d');
		let frame = requestAnimationFrame(loop);

		function loop(t) {
			frame = requestAnimationFrame(loop);

			const imageData = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);

			for (let p = 0; p < imageData.data.length; p += 4) {
				const i = p / 4;
				const x = i % canvas.current.width;
				const y = i / canvas.current.height >>> 0;

				const r = 64 + (128 * x / canvas.current.width) + (64 * Math.sin(t / 1000));
				const g = 64 + (128 * y / canvas.current.height) + (64 * Math.cos(t / 1000));
				const b = 128;

				imageData.data[p + 0] = r;
				imageData.data[p + 1] = g;
				imageData.data[p + 2] = b;
				imageData.data[p + 3] = 255;
			}

			ctx.putImageData(imageData, 0, 0);
		}

		return () => {
			cancelAnimationFrame(frame);
		};
	}, []);

  return (
    <canvas
      ref={canvas}
      className={styles.canvas}
    	width={32}
    	height={32}
    />
  );
}
