import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import AddButton from '../components/AddButton';

function Home(props) {
	console.log(props.books);
	return (
		<Wrapper>
			<h1>Home</h1>
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
