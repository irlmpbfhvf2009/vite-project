import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Back.css';
import { useTranslation } from 'react-i18next';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button className="back-button" onClick={handleClick}>
        {t('back')}
    </button>
  );
};

export default BackButton;





