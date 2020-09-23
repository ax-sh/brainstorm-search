// who what when where why how

const txt = `

define {}
{} meaning
what is {}
pros and cons of {}
why does {} work
{} alternatives
how to use {}
when to use {}
why use {}
{} synonym
who is {}

how does {} work?`;
const lines = txt
  .split('\n')
  .map((i) => i.trim())
  .filter((i) => i && i.length !== 0);

const sentences = lines;
export default sentences;
