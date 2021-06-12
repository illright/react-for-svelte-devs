import { PureComponent, createRef } from 'react';
import styles from './index.module.css';

/* Nothing similar to `tick` in convenience, but can be worked around */
export default class Tick extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Select some text and hit the tab key to toggle uppercase',
    }
    this.textarea = createRef();
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  render() {
    return (
      <textarea
        ref={this.textarea}
        value={this.state.text}
        onKeyDown={this.handleKeydown}
        className={styles.textarea}
      />
    );
  }

  async handleKeydown(event) {
		if (event.key !== 'Tab') return;

		event.preventDefault();

		const { selectionStart, selectionEnd, value } = this.textarea.current;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacement = /[a-z]/.test(selection)
			? selection.toUpperCase()
			: selection.toLowerCase();

		this.setState({
      text: (
        value.slice(0, selectionStart) +
		    replacement +
			  value.slice(selectionEnd)
      ),
    });
	}

  getSnapshotBeforeUpdate(_prevProps, _prevState) {
    const { selectionStart, selectionEnd } = this.textarea.current;
    return { selectionStart, selectionEnd };
  }

  componentDidUpdate(_prevProps, _prevState, snapshot) {
    this.textarea.current.selectionStart = snapshot.selectionStart;
    this.textarea.current.selectionEnd = snapshot.selectionEnd;
  }
}
