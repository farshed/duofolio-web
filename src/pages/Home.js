import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BookItem from '../components/BookItem';
import AddButton from '../components/AddButton';

function Home(props) {
	return (
		<Wrapper>
			{props.books.map((book, i) => (
				<BookItem book={book} key={i} />
			))}
			<AddButton />
		</Wrapper>
	);
}

function mapStateToProps(state) {
	return { books: state.shelf.books };
}

export default connect(mapStateToProps, null)(Home);

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	margin: 0px;
`;
