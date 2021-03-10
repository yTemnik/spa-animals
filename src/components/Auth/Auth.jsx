import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Auth.module.scss';

const AuthForm = (props) => {

	return (
		<div className={s.container}>
			<form className={s.form} onSubmit={props.handleSubmit}>
				<Field
					className={s.input}
					type={'text'}
					placeholder={'Логин'}
					name={'login'}
					component={'input'}
				/>
				<Field
					className={s.input}
					type={'password'}
					placeholder={'Пароль'}
					name={'password'}
					component={'input'}
				/>
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
        console.log(formData);
    }

    return (
        <>
                   <AuthReduxForm onSubmit={onSubmit} />
        </>
    )
}

export default Login;
