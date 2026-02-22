import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HovLogo from '../assets/svg/Hov-logo.svg?react';
import GroupTrees3 from '../assets/svg/GroupTrees3.svg?react';
import GroupTrees4 from '../assets/svg/GroupTrees4.svg?react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="text-white w-full flex flex-col">
      <div className="w-full bg-primary flex justify-between items-baseline max-h-">
        <GroupTrees3 className="text-secondary max-h-14 md:max-h-28 xl:max-h-56" />
        <GroupTrees4 className="text-secondary max-h-12 md:max-h-24 xl:max-h-48" />
      </div>

      <div className="flex flex-col justify-center items-start md:items-center w-full bg-secondary pt-20 pb-10 px-7">
        <HovLogo className="h-16 md:h-24 mb-5" />
        <div className="flex justify-center items-center mt-10">
          <div className="flex flex-wrap justify-start gap-8 lg:gap-16">
            <div className="footer-ul">
              <h3 className="md:text-lg font-bold uppercase mb-2">{t('common.links.title')}</h3>
              <ul>
                <li className="footer-list hover:underline cursor-pointer">
                  <Link to="/terms_and_conditions" className="hover:underline">
                    {t('common.links.terms')}
                  </Link>
                </li>
                <li className="footer-list hover:underline cursor-pointer">
                  <Link to="/privacy_policy" className="hover:underline">
                    {t('common.links.privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookie_settings"
                    className="footer-list hover:underline cursor-pointer"
                  >
                    {t('common.links.cookieSettings')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-ul">
              <h3 className="md:text-lg font-bold uppercase mb-2">{t('common.findUs.title')}</h3>
              <ul className="">
                <li className="footer-list">Hov Hyttegrend</li>
                <li className="footer-list">Gaularfjellsvegen 2203</li>
                <li className="footer-list">6978 Viksdalen</li>
              </ul>
            </div>

            <div className="footer-ul">
              <h3 className="md:text-lg font-bold uppercase mb-2">{t('common.contact.title')}</h3>
              <ul>
                <li className="footer-list">post@hovhyttegrend.no</li>
                <li className="footer-list">+47 400 67 568</li>
                <li className="footer-list flex flex-col">
                  {t('common.contact.openingHoursTitle')}
                  <span className="text-xs">{t('common.contact.openingHoursDescription')}</span>
                </li>
              </ul>
            </div>

            <div className="footer-ul">
              <h3 className="md:text-lg font-bold uppercase mb-2">{t('common.followUs.title')}</h3>
              <ul>
                <li className="footer-list hover:underline cursor-pointer">
                  <a
                    href="https://www.instagram.com/hovhyttegrend/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="footer-list hover:underline cursor-pointer">
                  <a
                    href="https://www.facebook.com/profile.php?id=61577866881745"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <small className="w-full md:text-center text-xs text-gray-300 mt-10">
            &copy; {new Date().getFullYear()} Hov Hyttegrend. All rights reserved.
          </small>
          <small className="w-full md:text-center text-xs text-gray-300 mt-2">
            Developed by{' '}
            <a
              href="https://haugedev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              HaugeDevelopment
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
}
