import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import DrawerTab from './DrawerTab';
import ContentsItem from './ContentsItem';
import Settings from './Settings';

const Drawer = (props) => {
	Modal.setAppElement('#modal');
	const [tab, selectTab] = useState('toc');

	function renderContent() {
		switch (tab) {
			case 'toc':
				return (
					props.contents &&
					props.contents.map((item, i) => (
						<ContentsItem {...item} rendition={props.rendition} key={i} />
					))
				);
			case 'search':
				return <div></div>;
			case 'settings':
				return <Settings />;
			default:
				return;
		}
	}

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
				<DrawerTab tab={tab} selectTab={selectTab} />
				{renderContent()}
			</Modal>
		</div>
	);
};

export default styled(Drawer).attrs({
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
		width: 90%;
		max-width: 300px;
		position: absolute;
		top: 0px;
		bottom: 0px;
		right: 0px;
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
