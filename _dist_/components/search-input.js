import React, { useRef } from '../../web_modules/react.js';
import styled from '../../web_modules/styled-components.js';
const Input = styled.input`
  //   font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: #1aaa3f;
  //   background-color: #bcc5c9;
`;
const Span = styled.span``;
const Div = styled.div``;
const Button = styled.button`
  //   font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const openInNewTab = url => {
  //   let win = window.open(url, '_blank');
  //   win.focus();
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href: url
  }).click();
};

const googleSearch = query => {
  openInNewTab('https://www.google.com.np/search?q=' + query);
};

const SearchInput = ({
  sentence,
  value,
  onChange
}) => {
  const [first, last] = sentence.split('{}');
  const queryRef = useRef();

  const onClick = () => {
    let query = queryRef.current.value;
    query = sentence.replace('{}', query.trim());
    googleSearch(query);
  };

  return /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Span, null, first), /*#__PURE__*/React.createElement(Input, {
    ref: queryRef,
    type: "search",
    value: value,
    onChange: onChange,
    onKeyDown: ({
      key
    }) => {
      key === 'Enter' && onClick();
    }
  }), /*#__PURE__*/React.createElement(Span, null, last), /*#__PURE__*/React.createElement(Button, {
    onClick: onClick
  }, "Go"));
};

export default SearchInput;