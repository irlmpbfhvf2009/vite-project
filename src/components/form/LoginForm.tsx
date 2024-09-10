import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LoginForm.css';

const LoginForm: React.FC = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Remember Me:', rememberMe);
    };
  
    return (


          <div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">{t('email')}</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='hello@diary.me'
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">{t('password')}</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder={t('passwordPlaceholder')}
                required 
              />
            </div>
            <div className="form-group remember-me">
              <input 
                type="checkbox" 
                id="rememberMe" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)} 
              />
              <label htmlFor="rememberMe">{t('rememberMe')}</label>
              <div></div>
              <button onClick={handleSubmit}>
                {t('login')}
              </button>
            </div>
          </form>
          </div>

    )
}


export default LoginForm;
