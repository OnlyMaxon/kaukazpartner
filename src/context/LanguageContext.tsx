import React, { createContext, useState } from 'react';

export type Language = 'en' | 'pl' | 'ru';

interface Translations {
  [key: string]: {
    en: string;
    pl: string;
    ru: string;
  };
}

export const translations: Translations = {
  heroTitle: {
    en: 'Flexible Work in Warsaw',
    pl: 'Elastyczna Praca w Warszawie',
    ru: 'Гибкая работа в Варшаве',
  },
  heroSubtitle: {
    en: 'Drive for Uber, Bolt, FreeNow or deliver with Wolt, Glovo. Official, legal, stable income.',
    pl: 'Jeź dla Ubera, Bolta, FreeNow lub dostarczaj z Woltem, Glovo. Oficjalnie, legalnie, stabilny dochód.',
    ru: 'Работайте на Uber, Bolt, FreeNow или доставляйте с Wolt, Glovo. Официально, легально, стабильный доход.',
  },
  startWorking: {
    en: 'Start Working Today',
    pl: 'Zacznij Pracować Dzisiaj',
    ru: 'Начните Работать Сегодня',
  },
  learnMore: {
    en: 'Learn More',
    pl: 'Dowiedz się Więcej',
    ru: 'Узнать Больше',
  },
  work: {
    en: 'Work',
    pl: 'Praca',
    ru: 'Работа',
  },
  carRental: {
    en: 'Car Rental',
    pl: 'Wynajem Samochodu',
    ru: 'Аренда Автомобиля',
  },
  aboutUs: {
    en: 'About Us',
    pl: 'O Nas',
    ru: 'О Нас',
  },
  blog: {
    en: 'Blog',
    pl: 'Blog',
    ru: 'Блог',
  },
  contacts: {
    en: 'Contacts',
    pl: 'Kontakty',
    ru: 'Контакты',
  },
  driver: {
    en: 'Driver',
    pl: 'Kierowca',
    ru: 'Водитель',
  },
  courier: {
    en: 'Courier',
    pl: 'Kurier',
    ru: 'Курьер',
  },
  ourMission: {
    en: 'Our Mission',
    pl: 'Nasza Misja',
    ru: 'Наша Миссия',
  },
  whyChooseUs: {
    en: 'Why Choose Kaukaz Partner?',
    pl: 'Dlaczego wybrać Kaukaz Partner?',
    ru: 'Почему выбрать Kaukaz Partner?',
  },
  stableIncome: {
    en: 'Stable Income',
    pl: 'Stabilny Dochód',
    ru: 'Стабильный Доход',
  },
  officialWork: {
    en: 'Official & Legal',
    pl: 'Oficjalnie i Legalnie',
    ru: 'Официально и Легально',
  },
  support24: {
    en: '24/7 Support',
    pl: 'Wsparcie 24/7',
    ru: 'Поддержка 24/7',
  },
  flexibleSchedule: {
    en: 'Flexible Schedule',
    pl: 'Elastyczny Harmonogram',
    ru: 'Гибкий График',
  },
  trustSignal: {
    en: 'Trusted by 1000+ drivers and couriers',
    pl: 'Zaufane przez 1000+ kierowców i kurierów',
    ru: 'Доверие 1000+ водителей и курьеров',
  },
  faq: {
    en: 'Frequently Asked Questions',
    pl: 'Najczęściej Zadawane Pytania',
    ru: 'Часто Задаваемые Вопросы',
  },
  contactUs: {
    en: 'Contact Us',
    pl: 'Skontaktuj się z Nami',
    ru: 'Свяжитесь с Нами',
  },
  getStarted: {
    en: 'Get Started',
    pl: 'Rozpocznij',
    ru: 'Начать',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translationObj = translations[key as keyof typeof translations];
    return translationObj?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
