import { useTranslation } from 'react-i18next';
import NO_flag from '../../assets/svg/Flagg-Norsk.svg';
import EN_flag from '../../assets/svg/Flagg-Engelsk.svg';
import DE_flag from '../../assets/svg/Flagg-Tysk.svg';
import FR_flag from '../../assets/svg/Flagg-Fransk.svg';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <div>
        <button onClick={() => i18n.changeLanguage('en')}>
          <img src={EN_flag} alt="English flag" />
        </button>
        <button onClick={() => i18n.changeLanguage('no')}>
          <img src={NO_flag} alt="Norwegian flag" />
        </button>
        <button onClick={() => i18n.changeLanguage('de')}>
          <img src={DE_flag} alt="German flag" />
        </button>
        <button onClick={() => i18n.changeLanguage('fr')}>
          <img src={FR_flag} alt="French flag" />
        </button>
      </div>
    </div>
  );
}
