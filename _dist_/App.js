import React, { useState } from '../web_modules/react.js';
import SearchInput from './components/search-input.js';
import './App.css.proxy.js';
import sentences from './queries.js';

const App = () => {
  const [query, setQuery] = useState(localStorage.getItem('query'));

  const onChange = ({
    target
  }) => {
    localStorage.setItem('query', target.value);
    setQuery(target.value);
    const len = query.length + 6;
    target.style.width = len ? len + 'ch' : 'inherit';
  };

  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, sentences.map((i, n) => /*#__PURE__*/React.createElement(SearchInput, {
    index: n,
    sentence: i,
    value: query,
    onChange: onChange
  }))));
};

export default App;