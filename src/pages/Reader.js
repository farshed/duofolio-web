import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Epub from 'epubjs/lib/index';
import { connect } from 'react-redux';
import * as actions from '../actions';
import close from '../assets/close.svg';

function Reader(props) {
	const [rendition, setRendition] = useState(null);

	useEffect(() => {
		readFile();
		document.addEventListener('keydown', keyHandler);
		return () => document.removeEventListener('keydown', keyHandler);
	}, []);

	function readFile() {
		const file = new FileReader();
		file.onload = function () {
			displayBook(file.result);
		};
		file.readAsArrayBuffer(props.currentBook);
	}

	function displayBook(bookData) {
		let book = Epub(bookData, { encoding: 'binary' });
		let rend = book.renderTo(document.getElementById('reader'), {});
		rend.display();
		setRendition(rend);
	}

	function keyHandler(e) {
		console.log(rendition);
		if (rendition !== null) {
			if (e.key === 'ArrowRight') {
				console.log('helsnd');
				rendition.next();
			} else if (e.key === 'ArrowLeft') {
				rendition.prev();
			}
		}
	}

	function goBack(e) {
		e.preventDefault();
		props.goToPage('home');
	}

	return (
		<Wrapper id="reader">
			<CloseIcon src={close} alt="" onClick={goBack} />
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
	z-index: 10;
`;
