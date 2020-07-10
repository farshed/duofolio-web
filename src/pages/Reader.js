import React, { useEffect } from 'react';
import styled from 'styled-components';
import Epub from 'epubjs/lib/index';
import { connect } from 'react-redux';
import * as actions from '../actions';
import close from '../assets/close.svg';

function Reader(props) {
	useEffect(readFile, []);

	function readFile() {
		const file = new FileReader();
		file.onload = function () {
			displayBook(file.result);
		};
		file.readAsArrayBuffer(props.currentBook);
	}

	function displayBook(bookData) {
		let book = Epub(bookData, { encoding: 'binary' });
		let rendition = book.renderTo(document.getElementById('reader'), {});
		let displayed = rendition.display();
	}

	function close(e) {
		e.stopPropagation();
		props.goToPage('home');
	}

	return (
		<Wrapper id="reader">
			<CloseIcon src={close} alt="" onClick={close} />
		</Wrapper>
	);
}

function mapStateToProps(state) {
	return { currentBook: state.shelf.currentBook };
}

export default connect(mapStateToProps, actions)(Reader);

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	margin: 0px;
`;

const CloseIcon = styled.img`
	height: 0.95em;
	width: 0.95em;
	position: absolute;
	top: 0.8em;
	right: 0.8em;
	cursor: pointer;
`;
