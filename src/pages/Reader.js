import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Epub from 'epubjs/lib/index';
import { connect } from 'react-redux';
import CloseButton from '../components/CloseButton';
import NextButton from '../components/NextButton';
import PrevButton from '../components/PrevButton';

function Reader(props) {
	const [rendition, setRendition] = useState(null);

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
		let rend = book.renderTo(document.getElementById('reader'), {});
		rend.on('selected', () => {
			if (window.document.getSelection) {
				console.log(window.document.getSelection().toString().length);
			}
		});
		rend.display();
		rend.on('keydown', (e) => {
			if (e.key === 'ArrowRight') {
				rend.next();
			} else if (e.key === 'ArrowLeft') {
				rend.prev();
			}
		});
		setRendition(rend);
	}

	return (
		<Wrapper id="reader">
			<CloseButton />
			<NextButton rendition={rendition} />
			<PrevButton rendition={rendition} />
		</Wrapper>
	);
}

function mapStateToProps(state) {
	return { currentBook: state.book };
}

export default connect(mapStateToProps, null)(Reader);

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	margin: 0px;
`;
