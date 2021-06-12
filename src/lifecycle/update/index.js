import Eliza from 'elizabot';
import { PureComponent, createRef } from 'react';
import styles from './index.module.css';

/* Running code before DOM updates is only supported with class components
   No need to check for the div's existence because `getSnapshotBefore` only
     runs after the initial render */
export default class Update extends PureComponent {
  constructor(props) {
    super(props);
    this.eliza = new Eliza();
    this.state = {
      comments: [{ author: 'eliza', text: this.eliza.getInitial() }],
    };
    this.div = createRef();

    this.handleKeydown = this.handleKeydown.bind(this);
  }

  getSnapshotBeforeUpdate(_prevProps, _prevState) {
    const div = this.div.current;
    return {
      shouldAutoScroll: (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20),
    };
  }

  componentDidUpdate(_prevProps, _prevState, snapshot) {
    if (snapshot.shouldAutoScroll) {
      this.div.current.scrollTo(0, this.div.current.scrollHeight);
    }
  }

  render() {
    return (
      <div className={styles.chat}>
      	<h1>Eliza</h1>

      	<div className={styles.scrollable} ref={this.div}>
      		{this.state.comments.map((comment, idx) => (
      			<article className={styles[comment.author]} key={idx}>
      				<span>{comment.text}</span>
      			</article>
      		))}
      	</div>

      	<input onKeyDown={this.handleKeydown} />
      </div>
    );
  }

  handleKeydown(event) {
    if (event.key === 'Enter') {
      const text = event.target.value;
      if (!text) return;

      this.setState({
        comments: this.state.comments.concat({
          author: 'user',
          text
        }),
      });

      event.target.value = '';

      const reply = this.eliza.transform(text);

      setTimeout(() => {
        this.setState({
          comments: this.state.comments.concat({
            author: 'eliza',
            text: '...',
            placeholder: true
          }),
        });

        setTimeout(() => {
          this.setState({
            comments: this.state.comments.filter(comment => !comment.placeholder).concat({
              author: 'eliza',
              text: reply
            }),
          });
        }, 500 + Math.random() * 500);
      }, 200 + Math.random() * 200);
    }
  }
}
