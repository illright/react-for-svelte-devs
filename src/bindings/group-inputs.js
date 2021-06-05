import { useState } from 'react';
import { bind } from '../utils.js';

function join(flavours) {
  if (flavours.length === 1) return flavours[0];
  return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
}

/* Must specify the `name` for radio buttons (reasonable)
   Must pass the value to the bind */
export default function GroupInputs(_props) {
  let [scoops, setScoops] = useState(1);
	let [flavours, setFlavours] = useState(['Mint choc chip']);

  const sizeOptions = [[1, 'One scoop'], [2, 'Two scoops'], [3, 'Three scoops']];
  const flavourOptions = ['Cookies and cream', 'Mint choc chip', 'Raspberry ripple'];

  let selection;
  if (flavours.length === 0) {
    selection = (<p>Please select at least one flavour</p>);
  } else if (flavours.length > scoops) {
    selection = (<p>Can't order more flavours than scoops!</p>);
  } else {
    selection = (
      <p>
        You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'} of {join(flavours)}
      </p>
    );
  }

  return (
    <>
      <h2>Size</h2>

      {sizeOptions.map(([amount, label]) => (
        <label key={label}>
          <input
            type="radio"
            name="size"
            {...bind.group({ value: amount }, scoops, setScoops)}
          />
          {label}
        </label>
      ))}

      <h2>Flavours</h2>

      {flavourOptions.map(flavour => (
        <label key={flavour}>
          <input
            type="checkbox"
            {...bind.groupMany({ value: flavour }, flavours, setFlavours)}
          />
          {flavour}
        </label>
      ))}

      {selection}
    </>
  );
}
