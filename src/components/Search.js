import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

function Search(props) {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		if (query) {
			searchBook();
		}
	}, [query]);

	function searchBook() {
		return Promise.all(
			props.book.spine.spineItems.map((item) => {
				return item.load(props.book.load.bind(props.book)).then((doc) => {
					let results = item.find(query);
					item.unload();
					return Promise.resolve(results);
				});
			})
		).then((results) => setResults([].concat.apply([], results)));
	}

	return (
		<Wrapper>
			<SearchBar setQuery={setQuery} />
			{results.length !== 0 && results.map((val, i) => console.log(val))}
		</Wrapper>
	);
}

export default Search;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 1em;
`;
