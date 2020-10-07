import React, { useState } from "react";
import SearchInput from "./components/search-input";
import "./App.css";
import { defaultSentences, parseSentences } from "./queries";

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

				{sentences.map((i, n) => (
					<SearchInput index={n} sentence={i} value={lastQuery} onChange={onChange} />
				))}
			</div>
		</main>
	);
};

export default App;
