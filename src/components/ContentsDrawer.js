import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ContentsItem from '../components/ContentsItem';

const ContentsDrawer = (props) => {
	Modal.setAppElement('#modal');

	return (
		<div onClick={(e) => e.stopPropagation()}>
			<Modal
				isOpen={props.isVisible}
				shouldCloseOnOverlayClick
				portalClassName={props.className}
				className={props.modalClassName}
				overlayClassName={props.overlayClassName}
				onRequestClose={(e) => {
					e.stopPropagation();
					props.setVisible(false);
				}}>
				{props.contents &&
					props.contents.map((item, i) => (
						<ContentsItem {...item} rendition={props.rendition} key={i} />
					))}
			</Modal>
		</div>
	);
};

export default styled(ContentsDrawer).attrs({
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
		width: 25%;
		position: absolute;
		top: 0px;
		bottom: 0px;
		right: 0px;
		background-color: #fafafa;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		z-index: 12;
		padding-top: 7em;
		white-space: nowrap;
		overflow-y: auto;
		overflow-x: hidden;
		text-overflow: ellipsis;
		&:focus {
			outline: none;
		}
	}
`;
