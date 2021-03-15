import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import s from './Auth.module.scss';
import { loginTC } from './../../redux/auth-reducer';
import { Redirect } from 'react-router';
import { InputElem } from './validators/InputElem';

const AuthForm = (props) => {
	return (
		<div className={s.container}>
			<form className={s.form} onSubmit={props.handleSubmit}>
				<Field
					className={s.input}
					type={'text'}
					placeholder={'Логин'}
					name={'login'}
					component={InputElem}
				/>
				<Field
					className={s.input}
					type={'password'}
					placeholder={'Пароль'}
					name={'password'}
					component={InputElem}
				/>
				{props.errorAuth ? (
					<div className={s.error}>Имя пользователя или пароль введены не верно</div>
				) : null}
				<button className={s.btn}>Войти</button>
			</form>
		</div>
	);
};

const AuthReduxForm = reduxForm({
	form: 'login',
})(AuthForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.loginTC(formData.login, formData.password);
	};

	if (props.isAuth) {
		return <Redirect to={'/today'} />;
	}

	return (
		<>
			<AuthReduxForm errorAuth={props.error} onSubmit={onSubmit} />
		</>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.authPage.isAuth,
	error: state.authPage.error,
});

export default connect(mapStateToProps, { loginTC })(Login);
