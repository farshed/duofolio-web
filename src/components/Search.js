import React, { useState } from 'react';
import styled from 'styled-components';

function Search(props) {
	const [input, setInput] = useState('');
	const [results, setResults] = useState([]);

	function searchBook(e) {
		e.preventDefault();
		return Promise.all(
			props.book.spine.spineItems.map((item) => {
				return item.load(props.book.load.bind(props.book)).then((doc) => {
					let results = item.find(input.trim());
					item.unload();
					return Promise.resolve(results);
				});
			})
		).then((results) => setResults([].concat.apply([], results)));
	}

	return (
		<Wrapper>
			<form onSubmit={searchBook}>
				<Input
					type="text"
					placeholder="Search book..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>
			{results.length !== 0 && <Text>{`Found ${results.length} matches`}</Text>}
			{results.length !== 0 &&
				results.map((res, i) => (
					<SearchItem onClick={() => props.rendition.display(res.cfi)} key={i}>
						{res.excerpt.trim()}
					</SearchItem>
				))}
		</Wrapper>
	);
}

export default Search;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 1em;
`;

const Input = styled.input`
	height: 2em;
	width: calc(100% - 3em);
	margin-right: 1em;
	margin-left: 1em;
	padding-right: 0.5em;
	padding-left: 0.5em;
	border: 1px solid rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	&:focus {
		outline: none;
	}
`;

const Text = styled.p`
	font-size: 0.9em;
	margin: 1em 0 1em 1em;
	font-family: Roboto;
`;

const SearchItem = styled.div`
	width: calc(100% - 3em);
	margin: 1em;
	padding: 0.5em;
	border-radius: 4px;
	font-size: 0.8em;
	border: 1px solid rgba(0, 0, 0, 0.25);
	white-space: pre-wrap;
	cursor: pointer;
`;
