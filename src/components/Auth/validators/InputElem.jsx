import React from 'react';
import s from "./../Auth.module.scss"

export const InputElem = ({ input, meta, ...props }) => {
	return (
		<div className={s.error}>
			<input {...input} {...props} />
			{meta.touched && meta.error && <span>Имя пользователя или пароль введены не верно</span>}
		</div>
	);
};
