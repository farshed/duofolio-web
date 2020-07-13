import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const ContentsDrawer = (props) => {
	Modal.setAppElement('#modal');

	useEffect(() => {
		// if (isVisible) {
		// document.getElementById('root').style.filter = 'blur(10px)';
		// } else document.getElementById('root').style.filter = 'blur(0px)';
	}, [props.isVisible]);

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
				}}></Modal>
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
		left: 0px;
		background-color: ${(props) => props.theme.background};
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		&:focus {
			outline: none;
		}
	}
`;
