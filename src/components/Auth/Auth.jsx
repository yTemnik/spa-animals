import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import s from './Auth.module.scss';
import { loginTC } from './../../redux/auth-reducer';
import { Redirect } from 'react-router';
import { InputElem } from './validators/InputElem';
import { Speedometer } from '../common/Speedometer/Speedometer';

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
          <div className={s.error}>
            Имя пользователя или пароль введены не верно
          </div>
        ) : null}
        <button
          className={s.btn}
          onClick={() => {
            props.setRotate(props.rotate + 10);
          }}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

const AuthReduxForm = reduxForm({
  form: 'login',
})(AuthForm);

const Login = (props) => {
  const token = localStorage.getItem('token');

  const onSubmit = (formData) => {
    props.loginTC(formData.login, formData.password);
  };

  const [rotate, setRotate] = useState(-100);

  if (token) {
    return <Redirect to={'/today'} />;
  }

  return (
    <>
      <AuthReduxForm
        errorAuth={props.error}
        onSubmit={onSubmit}
        rotate={rotate}
        setRotate={setRotate}
      />
      <Speedometer rotate={rotate} counter={props.counter} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
  error: state.authPage.error,
  counter: state.authPage.counter,
});

export default connect(mapStateToProps, { loginTC })(Login);
