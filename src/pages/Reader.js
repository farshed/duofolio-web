import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Epub from 'epubjs/lib/index';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ContentsDrawer from '../components/ContentsDrawer';
import Header from '../components/Header';
import ContentsButton from '../components/buttons/ContentsButton';
import BackButton from '../components/buttons/BackButton';
import NextButton from '../components/buttons/NextButton';
import PrevButton from '../components/buttons/PrevButton';
import themeToStyles from '../utils/themeToStyles';

function Reader(props) {
	const [rendition, setRendition] = useState(null);
	const [isContentDrawer, setContentDrawer] = useState(false);
	const [contents, setContents] = useState(null);

	useEffect(readFile, []);
	// useEffect(() => {
	// 	if (rendition) {
	// 		rendition.themes.register({ theme: themeToStyles(props.settings) });
	// 		rendition.themes.select('theme');
	// 	}
	// }, [props.settings]);

	function readFile() {
		const file = new FileReader();
		file.onload = function () {
			bookInit(file.result);
		};
		file.readAsArrayBuffer(props.currentBook);
	}

	function bookInit(bookData) {
		let book = Epub(bookData, { encoding: 'binary' });
		let rend = book.renderTo(document.getElementById('reader'), {
			width: '100%',
			height: '95%'
		});
		// rend.themes.register({ theme: themeToStyles(props.settings) });
		// rend.themes.select('theme');

		rend.on('started', () => {
			rend.display(props.locations[book.key()]);
		});

		book.loaded.navigation.then((nav) => {
			let c = nav.toc.map(({ href, label }) => {
				return { href, label };
			});
			setContents(c);
		});

		document.body.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowRight') {
				// console.log(rend.location);
				rend.next();
			} else if (e.key === 'ArrowLeft') {
				rend.prev();
			}
		});

		rend.on('relocated', (e) => {
			props.addLocation({ key: book.key(), cfi: e.start.cfi });
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
		<Wrapper id="reader" bg={props.settings.bg}>
			{/* <Header /> */}
			<Header isVisible={isContentDrawer} setVisible={setContentDrawer} />
			<ContentsDrawer
				isVisible={isContentDrawer}
				setVisible={setContentDrawer}
				contents={contents}
				rendition={rendition}
			/>
			<NextButton rendition={rendition} />
			<PrevButton rendition={rendition} />
		</Wrapper>
	);
}

function mapStateToProps(state) {
	return {
		currentBook: state.book,
		settings: state.settings,
		locations: state.location
	};
}

export default connect(mapStateToProps, actions)(Reader);

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	margin: 0px;
	background-color: ${(props) => props.bg};
`;
