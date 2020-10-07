import React, { useState } from 'react';
import SearchInput from './components/search-input';
import './App.css';
import sentences from './queries';

const App = () => {
  const [query, setQuery] = useState(localStorage.getItem('query'));

  const onChange = ({ target }) => {
    localStorage.setItem('query', target.value);
    setQuery(target.value);
    const len = query.length + 6;
    target.style.width = len ? len + 'ch' : 'inherit';
  };
  return (
    <main>
      <div className="App">
        {/* TODO make a nav for google search config  */}
        {/* <nav>Settings</nav> */}

        {sentences.map((i, n) => (
          <SearchInput
            index={n}
            sentence={i}
            value={query}
            onChange={onChange}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
