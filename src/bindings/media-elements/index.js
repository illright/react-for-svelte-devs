// Unfinished

import { useState } from 'react';
import { bind, bindRO } from '../../utils.js';
import styles from './index.module.css';

function format(seconds) {
  if (isNaN(seconds)) return '...';

  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  if (seconds < 10) seconds = '0' + seconds;

  return `${minutes}:${seconds}`;
}

export default function MediaElements(_props) {
  // These values are bound to properties of the video
	let [time, setTime] = useState(0);
	let [duration, setDuration] = useState(null);
	let [paused, setPaused] = useState(true);

	let showControls = true;
	let showControlsTimeout;

	function handleMousemove(e) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => showControls = false, 2500);
		showControls = true;

		if (!(e.buttons & 1)) return; // mouse not down
		if (!duration) return; // video not loaded yet

		const { left, right } = this.getBoundingClientRect();
		time = duration * (e.clientX - left) / (right - left);
	}

	function handleMousedown(e) {
		// we can't rely on the built-in click event, because it fires
		// after a drag — we have to listen for clicks ourselves

		function handleMouseup() {
			if (paused) e.target.play();
			else e.target.pause();
			cancel();
		}

		function cancel() {
			e.target.removeEventListener('mouseup', handleMouseup);
		}

		e.target.addEventListener('mouseup', handleMouseup);

		setTimeout(cancel, 200);
	}

  return (
    <>
      <h1>Caminandes: Llamigos</h1>
      <p>From <a href="https://cloud.blender.org/open-projects">Blender Open Projects</a>. CC-BY</p>

      <div className={styles.container}>
        <video
          className={styles.video}
          poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
          src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
          onMouseMove={handleMousemove}
          onMouseDown={handleMousedown}
          {...bind.currentTime(time, setTime)}
          {...bindRO.duration(setDuration)}
          {...bind.paused(paused, setPaused)}
        >
          <track kind="captions" />
        </video>

        <div
          className={[styles.container, styles.controls]}
          style={{ opacity: duration && showControls ? 1 : 0 }}
        >
          <progress className={styles.progress} value={(time / duration) || 0} />

          <div className={styles.info}>
            <span className={styles.time}>{format(time)}</span>
            <span>click anywhere to {paused ? 'play' : 'pause'} / drag to seek</span>
            <span className={styles.time}>{format(duration)}</span>
          </div>
        </div>
      </div>
    </>
  )
}
