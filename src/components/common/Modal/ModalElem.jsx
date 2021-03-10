import React from 'react';
import s from './ModalElem.module.scss';

const ModalElem = ({ modalActive, setModalActive, children }) => {
	return (
		<div
			className={modalActive ? `${s.modal} ${s.active}` : `${s.modal}`}
			onClick={() => setModalActive(false)}
		>
			<div className={s.content} onClick={(e) => e.stopPropagation()}>
				<button className={s.close} onClick={() => setModalActive(false)}></button>
				{children}
			</div>
		</div>
	);
};

export default ModalElem;
