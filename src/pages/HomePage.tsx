import React from 'react';
import './HomePage.css'
import LoginButton from '../components/button/Login';
import TabComponent from '../components/TabComponent';

const HomePage: React.FC = () => {

  return (
    <div className="homepage">
      <header className="header">
      </header>
      <section className="entries">
        <LoginButton />
        <TabComponent />
      </section>
    </div>
  );
};

export default HomePage;
