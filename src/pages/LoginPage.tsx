import React, { useState } from 'react';
import Back from '../components/button/Back'
import LoginForm from '../components/form/LoginForm'
import RegisterForm from '../components/form/RegisterForm'
import logo from '../assets/1x.png'
import './LoginPage.css'
import { useTranslation } from 'react-i18next';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <div className="login-content">
        <div className="log">
          <img src={logo} alt="Logo" />
        </div>
        <div className="auth-buttons">
          <button 
            className="register-button" 
            onClick={() => setIsLogin(false)}
          >
            {t('register')}
          </button>
          <button 
            className="login-toggle-button" 
            onClick={() => setIsLogin(true)}
          >
            {t('login')}
          </button>
        </div>
        <div>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <Back />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;