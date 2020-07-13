import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Epub from 'epubjs/lib/index';
import { connect } from 'react-redux';
import ContentsDrawer from '../components/ContentsDrawer';
import ContentsButton from '../components/ContentsButton';
import CloseButton from '../components/CloseButton';
import NextButton from '../components/NextButton';
import PrevButton from '../components/PrevButton';
import { darkTheme } from '../constants';

function Reader(props) {
	const [rendition, setRendition] = useState(null);
	const [isContentDrawer, setContentDrawer] = useState(false);
	const [contents, setContents] = useState(null);

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
		rend.display();
		// if (props.theme === 'dark') {
		// rend.getContents().forEach((item) => item.addStylesheetRules(darkTheme));
		// 	rend.themes.register('dark', darkTheme);
		// }

		book.loaded.navigation.then((nav) => {
			let c = nav.toc.map(({ href, label }) => {
				return { href, label };
			});
			setContents(c);
		});

		document.body.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowRight') {
				rend.next();
			} else if (e.key === 'ArrowLeft') {
				rend.prev();
			}
		});

		rend.on('selected', () => {
			let selection =
				rend.manager && rend.manager.getContents().length > 0
					? rend.manager.getContents()[0].window.getSelection().toString().trim()
					: '';
		});
		setRendition(rend);
	}

	return (
		<Wrapper id="reader">
			<ContentsButton isVisible={isContentDrawer} setVisible={setContentDrawer} />
			<ContentsDrawer
				isVisible={isContentDrawer}
				setVisible={setContentDrawer}
				contents={contents}
				rendition={rendition}
			/>
			<CloseButton />
			<NextButton rendition={rendition} />
			<PrevButton rendition={rendition} />
		</Wrapper>
	);
}

function mapStateToProps(state) {
	return {
		currentBook: state.book,
		theme: state.settings.theme,
		location: state.location
	};
}

export default connect(mapStateToProps, null)(Reader);

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	margin: 0px;
 	/* background-color: ${(props) => props.theme.background}; */
	/* color: red;
	p {
		color: ${(props) => props.theme.foreground} !important;
	} */
`;
