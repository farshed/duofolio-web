import React, { useState } from 'react';
import styled from 'styled-components';

function SearchBar(props) {
	const [input, setInput] = useState('');

	return (
		<form onSubmit={() => props.setQuery(input.trim())}>
			<Input
				type="text"
				placeholder="Search book..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</form>
	);
}

export default SearchBar;

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
