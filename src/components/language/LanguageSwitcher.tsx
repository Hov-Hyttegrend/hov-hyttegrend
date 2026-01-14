import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

import NO_flag from '../../assets/svg/Flagg-Norsk.svg';
import EN_flag from '../../assets/svg/Flagg-Engelsk.svg';
import DE_flag from '../../assets/svg/Flagg-Tysk.svg';
import FR_flag from '../../assets/svg/Flagg-Fransk.svg';

const languages = [
  { code: 'en', flag: EN_flag, alt: 'English flag' },
  { code: 'no', flag: NO_flag, alt: 'Norwegian flag' },
  { code: 'de', flag: DE_flag, alt: 'German flag' },
  { code: 'fr', flag: FR_flag, alt: 'French flag' },
];

export default function LanguageSwitcher() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);
  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setMenuOpen(false);
  };

  const otherLanguages = languages.filter((lang) => lang.code !== currentLanguage.code);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setMenuOpen(!isMenuOpen)} className="flex items-center justify-center">
        <img src={currentLanguage.flag} alt={currentLanguage.alt} className="rounded" />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 rounded-lg z-50 bg-secondary p-1">
          {otherLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex mb-2 justify-center rounded w-full hover:cursor-pointer"
            >
              <img src={lang.flag} alt={lang.alt} className="rounded" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
