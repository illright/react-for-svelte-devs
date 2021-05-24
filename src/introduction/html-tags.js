import { Markup } from 'interweave';

/* There is `dangerouslySetInnerHTML={{ __html: ... }}` for this purpose,
     but it can not be used on fragments, thus, no pure HTML alongside components
   The Interweave library provides the desired functionality safely */
export default function HTMLTags(_props) {
  let string = `this string contains some <strong>HTML!!!</strong>`;

  return (
    <p>
      <Markup content={string} />
    </p>
  );
}
