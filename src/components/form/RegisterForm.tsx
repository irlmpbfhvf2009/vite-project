import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LoginForm.css';

const LoginForm: React.FC = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordEntered, setPasswordEntered] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordEntered(e.target.value.length > 0);
                  }} 
                  placeholder={t('passwordPlaceholder')}
                  required 
                />
              </div>
              {passwordEntered && (
                    <div className="form-group">
                        <label htmlFor="confirmPassword">{t('confirm')}</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            value='{confirmPassword} '
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            placeholder={t('confirmPasswordPlaceholder')}
                            required 
                        />
                    </div>
                )}
              <div className="form-group">
                <button type="submit">
                  {t('register')}
                </button>
              </div>
            </form>
          </div>
    )
}

export default LoginForm;