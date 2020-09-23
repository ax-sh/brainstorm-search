import React, { useRef } from 'react';
import styled from 'styled-components';

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

const openInNewTab = (url) => {
  //   let win = window.open(url, '_blank');
  //   win.focus();
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href: url,
  }).click();
};

const googleSearch = (query) => {
  openInNewTab('https://www.google.com.np/search?q=' + query);
};

const SearchInput = ({ sentence, value, onChange }) => {
  const [first, last] = sentence.split('{}');
  const queryRef = useRef();
  const onClick = () => {
    let query = queryRef.current.value;

    query = sentence.replace('{}', query.trim());
    googleSearch(query);
  };
  return (
    <Div>
      <Span>{first}</Span>
      <Input
        ref={queryRef}
        type="search"
        value={value}
        onChange={onChange}
        onKeyDown={({ key }) => {
          key === 'Enter' && onClick();
        }}
      />
      <Span>{last}</Span>
      <Button onClick={onClick}>Go</Button>
    </Div>
  );
};
export default SearchInput;
