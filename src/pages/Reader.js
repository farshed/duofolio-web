import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Epub from 'epubjs/lib/index';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Drawer from '../components/Drawer';
import Header from '../components/Header';
import NextButton from '../components/buttons/NextButton';
import PrevButton from '../components/buttons/PrevButton';
import themeToStyles from '../utils/themeToStyles';

function Reader(props) {
	const [bookState, setBookState] = useState(null);
	const [rendition, setRendition] = useState(null);
	const [isContentDrawer, setContentDrawer] = useState(false);
	const [contents, setContents] = useState(null);

	useEffect(readFile, []);
	useEffect(() => {
		if (rendition) {
			rendition.themes.register({ theme: themeToStyles(props.settings) });
			rendition.themes.select('theme');
			rendition.getContents().forEach(getFonts);
		}
	}, [props.settings]);

	function readFile() {
		const file = new FileReader();
		file.onload = function () {
			bookInit(file.result);
		};
		file.readAsArrayBuffer(props.currentBook);
	}

	function getFonts(content) {
		let el = content.document.body.appendChild(content.document.createElement('link'));
		el.setAttribute('rel', 'stylesheet');
		el.setAttribute(
			'href',
			'https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=EB+Garamond:ital@0;1&family=Libre+Caslon+Text:ital@0;1&family=Lora:ital@0;1&family=Pacifico&family=Poppins&family=Raleway:ital@0;1&family=Roboto:ital@0;1&family=Special+Elite&display=swap'
		);
	}

	function bookInit(bookData) {
		let book = Epub(bookData, { encoding: 'binary' });
		let rend = book.renderTo(document.getElementById('reader'), {
			width: '100%',
			height: '97%'
		});

		rend.on('started', () => {
			rend.display(props.locations[book.key()]);
			rend.themes.register({ theme: themeToStyles(props.settings) });
			rend.themes.select('theme');
			setTimeout(() => rend.getContents().forEach(getFonts), 200);
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
		setBookState(book);
		setRendition(rend);
	}

	return (
		<Wrapper bg={props.settings.bg}>
			<Header isVisible={isContentDrawer} setVisible={setContentDrawer} />
			<ReaderView id="reader" />
			<Drawer
				isVisible={isContentDrawer}
				setVisible={setContentDrawer}
				book={bookState}
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

const ReaderView = styled.div`
	display: flex;
	flex: 1;
	margin: 0px;
`;
