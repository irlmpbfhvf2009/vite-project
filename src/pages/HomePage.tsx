import React from 'react';
import { useTranslation } from 'react-i18next';
import LoginButton from '../components/button/Login';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="homepage">
      <header className="header">
        <h1>{t('welcome')}</h1>
      </header>
      <section className="entries">
        <LoginButton />
      </section>
    </div>
  );
};

export default HomePage;
