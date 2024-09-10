import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import zhTranslations from './locales/zh/translation.json';
import zhTWTranslations from './locales/zh-TW/translation.json';

// 初始化 i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      zh: { translation: zhTranslations },
      'zh-TW': { translation: zhTWTranslations }
    },
    lng: 'zh-TW', // 默認語言
    fallbackLng: 'zh-TW', // 預設語言
    interpolation: {
      escapeValue: false // React 已經安全處理了
    }
  });

export default i18n;
