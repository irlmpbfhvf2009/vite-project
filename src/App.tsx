// src/App.tsx
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-ls">
          <LanguageSwitcher />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
