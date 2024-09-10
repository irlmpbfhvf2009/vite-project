import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-switcher">
      <select onChange={handleChange} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="zh-TW">繁體中文</option>
        <option value="zh">简体中文</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
