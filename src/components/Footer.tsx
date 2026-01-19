import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HovLogo from '../assets/svg/Hov-logo.svg?react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-secondary text-white w-full py-20 px-7">
      <div className="flex flex-col lg:flex-row justify-center">
        <HovLogo className="h-24" />
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-bold uppercase">{t('common.links.title')}</h3>
            <ul>
              <li>
                <Link to="/terms_and_conditions" className="hover:underline">
                  {t('common.links.terms')}
                </Link>
              </li>
              <li>
                <Link to="/privacy_policy" className="hover:underline">
                  {t('common.links.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase">{t('common.contact.title')}</h3>
            <ul>
              <li>post@hovhyttegrend.no</li>
              <li>+47 400 67 568</li>
              <li className="flex flex-col ">
                {t('common.contact.openingHoursTitle')}
                <span>09:00 - 11:00 | 18:30 - 20:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase">{t('common.findUs.title')}</h3>
            <ul>
              <li>Hov Hyttegrend</li>
              <li>Gaularfjellsvegen 2203</li>
              <li>6978 Viksdalen</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase">{t('common.followUs.title')}</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="w-full text-center text-xs">
        &copy; {new Date().getFullYear()} Hov Hyttegrend. All rights reserved.
      </p>
    </footer>
  );
}
