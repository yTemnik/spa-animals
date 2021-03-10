import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import s from './Auth.module.scss';
import {loginTC} from './../../redux/auth-reducer'
import { Redirect } from 'react-router';

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
/* 	console.log(props.isAuth); */
    const onSubmit = (formData) => {
		props.loginTC(formData.login, formData.password);
    }
    
	if (props.isAuth) {
	   return <Redirect to={"/today"} /> 
	} 

    return (
        <> 
                   <AuthReduxForm onSubmit={onSubmit} />
        </>
    )
}

const mapStateToProps = (state) => ({
	isAuth : state.authPage.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);
