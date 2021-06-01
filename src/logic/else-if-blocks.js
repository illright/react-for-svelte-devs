/* The conditional operator starts getting messy with else-if blocks
     so it's best to move on to proper `if` statements */
export default function ElseIfBlocks(_props) {
  let x = 7;

  if (x > 10) {
    return (<p>{x} is greater than 10</p>);
  } else if (5 > x) {
    return (<p>{x} is less than 5</p>);
  } else {
    return (<p>{x} is between 5 and 10</p>);
  }
}
