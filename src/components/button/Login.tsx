import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useTranslation } from 'react-i18next';

const LoginButton: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <button className="login-button" onClick={handleClick}>
        {t('login')}
    </button>
  );
};

export default LoginButton;





