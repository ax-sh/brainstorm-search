import React, { useState } from 'react';
import SearchInput from './components/search-input';
import './App.css';

const sentences = [
  'pros and cons of {}',
  'what is {}',
  'why does {} work',
  '{} alternatives',
  'how to use {}',
  'when to use {}',
  'why use {}',
  'where to find {}',
];

function App() {
  const [query, setQuery] = useState('');

  const onChange = ({ target }) => {
    setQuery(target.value);
  };
  return (
    <div className="App">
      {sentences.map((i) => (
        <SearchInput sentence={i} value={query} onChange={onChange} />
      ))}
    </div>
  );
}

export default App;
