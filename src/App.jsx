import React, { useState } from "react";
import SearchInput from "./components/search-input";
import "./App.css";
import { defaultSentences, parseSentences } from "./queries";
import styled from "styled-components";

const TextArea = styled.textarea`
	width: 80%;
	min-height: 300px;
	background-color: #333;
	color: #fff;
	font-size: 1.5em;
	padding: 10px;
	display: ${(props) => (props.visibility ? "inline-block" : "none")};
`;

const EditCustomSentences = ({ text }) => {
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle(!toggle);
	};
	return (
		<div>
			<div>
				<button onClick={handleToggle}>Modify Template</button>
			</div>
			<TextArea visibility={toggle} value={text && text.trim()} />
		</div>
	);
};

const sentences = parseSentences(defaultSentences);
const App = () => {
	const [lastQuery, setLastQuery] = useState(localStorage.getItem("query"));
	const onChange = ({ target }) => {
		localStorage.setItem("query", target.value);
		setLastQuery(target.value);
		const len = lastQuery && lastQuery.length + 6;
		target.style.width = len ? len + "ch" : "inherit";
	};
	return (
		<main>
			<div className="App">
				{/* TODO make a nav for google search config  */}
				{/* <nav>Settings</nav> */}
				<EditCustomSentences text={defaultSentences} />

				{sentences.map((i, n) => (
					<SearchInput index={n} sentence={i} value={lastQuery} onChange={onChange} />
				))}
			</div>
		</main>
	);
};

export default App;
