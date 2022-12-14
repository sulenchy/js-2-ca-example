import React from 'react';
import LoginForm from '../../components/inputForms/Login';
import Introduction from '../../components/Introduction';

function Login() {
  return (
  <>
    <Introduction name = "Log in to get Admin priviliges."/>
    <LoginForm />
  </>
  )
};
export default Login
