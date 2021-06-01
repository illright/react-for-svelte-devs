import React from 'react';
import styles from './thing.module.css';

/* A class component is needed to persist data among rerenders */
export default class Thing extends React.Component {
  constructor(props) {
    super(props);

    // `props.current` is updated whenever the prop value changes
    //   but `initial` is fixed upon initialisation
    this.initial = props.current;
  }

  render() {
    return (
      <p>
      	<span className={styles.thing} style={{ backgroundColor: this.initial }}>
          initial
        </span>
      	<span className={styles.thing} style={{ backgroundColor: this.props.current }}>
          current
        </span>
      </p>
    )
  }
}
