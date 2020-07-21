import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
		return fra
			.filter((word) => {
				word = ` ${word[0].toLowerCase()} `;
				return word.indexOf(q) > -1;
			})
			.sort((a, b) => a[0].length - b[0].length)
			.splice(0, 5);
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
				{searchDict(selection).map((res) => (
					<Wrapper>
						<Word>{res[0]}</Word>
						<Role>{res[2]}</Role>
						<Meaning>{res[1]}</Meaning>
					</Wrapper>
				))}
			</Modal>
		</div>
	);
}

export default styled(Dictionary).attrs({
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
	}
	.Modal {
		min-width: 500px;
		position: absolute;
		top: 25%;
		bottom: 25%;
		right: 25%;
		left: 25%;
		background-color: #fafafa;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		z-index: 12;
		padding-top: 3.5em;
		padding-bottom: 1em;
		white-space: nowrap;
		overflow-y: auto;
		overflow-x: hidden;
		text-overflow: ellipsis;
		&:focus {
			outline: none;
		}
	}
`;

const Wrapper = styled.div`
	width: 100%;
	height: 3em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin-left: 1em;
	margin-right: 1em;
`;

const Word = styled.p`
	font-family: Roboto;
	font-size: 1.5em;
	color: #0f2439;
`;

const Meaning = styled.p`
	font-family: Roboto;
	font-size: 0.75em;
	color: #0f2439;
`;

const Role = styled.p`
	font-family: Roboto;
	font-size: 0.5em;
	color: #0f2439;
`;
