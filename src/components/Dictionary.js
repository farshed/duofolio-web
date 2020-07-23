import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import fra from '../assets/dicts/fra-en';
import es from '../assets/dicts/es-en';

function Dictionary(props) {
	Modal.setAppElement('#modal');
	const [isVisible, setVisible] = useState(false);
	const [selection, setSelection] = useState('');

	useEffect(() => {
		if (props.rendition) {
			props.rendition.on('selected', () => {
				let selected =
					props.rendition.manager && props.rendition.manager.getContents().length > 0
						? props.rendition.manager.getContents()[0].window.getSelection().toString().trim()
						: '';
				if (selected) {
					setSelection(selected);
					setVisible(true);
				}
			});
		}
	}, [props.rendition]);

	function searchDict(q) {
		q = ` ${q.toLowerCase()} `;
		let dict;
		switch (props.language) {
			case 'French':
				dict = fra;
				break;
			case 'Spanish':
				dict = es;
				break;
			default:
				dict = es;
				break;
		}
		return dict
			.filter((word) => {
				word = ` ${word[0].split('[')[0].toLowerCase()} `;
				return word.indexOf(q) > -1;
			})
			.sort((a, b) => a[0].length - b[0].length);
	}

	return (
		<div onClick={(e) => e.stopPropagation()}>
			<Modal
				isOpen={isVisible}
				shouldCloseOnOverlayClick
				portalClassName={props.className}
				className={props.modalClassName}
				overlayClassName={props.overlayClassName}
				onRequestClose={(e) => {
					e.stopPropagation();
					setVisible(false);
					setSelection('');
				}}>
				{searchDict(selection).map((res, i) => (
					<Wrapper key={i}>
						<Word>{res[0]}</Word>
						<Role>{res[2]}</Role>
						<Meaning>{res[1]}</Meaning>
					</Wrapper>
				))}
			</Modal>
		</div>
	);
}

function mapStateToProps(state) {
	return { language: state.settings.language };
}

export default styled(connect(mapStateToProps, null)(Dictionary)).attrs({
	overlayClassName: 'Overlay',
	modalClassName: 'Modal'
})`
	.Overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}
	.Modal {
		width: 100%;
		max-width: 500px;
		height: 45%;
		position: absolute;
		bottom: 0px;
		background-color: #fafafa;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		z-index: 12;
		white-space: nowrap;
		overflow-y: auto;
		overflow-x: hidden;
		text-overflow: ellipsis;
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;
		padding-top: 1em;
		padding-bottom: 1em;
		&:focus {
			outline: none;
		}
	}
`;

const Wrapper = styled.div`
	width: 100%;
	min-height: 4em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: 1em;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const Word = styled.p`
	font-family: Roboto;
	font-weight: bold;
	font-size: 1.2em;
	color: #0f2439;
`;

const Meaning = styled.p`
	font-family: Roboto;
	font-size: 1em;
	color: #0f2439;
	margin-top: 0.5em;
`;

const Role = styled.p`
	font-family: Roboto;
	font-style: italic;
	font-size: 0.75em;
	color: #0f2439;
`;
