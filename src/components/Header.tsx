import { useTranslation } from 'react-i18next';

import { useEffect, useRef, useState } from 'react';
import HovLogo from '../assets/svg/Hov-logo.svg?react';

import Vector1 from '../assets/svg/Vector1.svg?react';
import IconX from '../assets/svg/icon-X.svg?react';
import IconMenu from '../assets/svg/icon-BurgerMenu.svg?react';

import LanguageSwitcher from './language/LanguageSwitcher';
import { Link } from 'react-router-dom';

export default function Header() {
  const { t } = useTranslation();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setAnimateOut(true);
      setTimeout(() => {
        setMenuOpen(false);
        setAnimateOut(false);
      }, 400);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        if (isMenuOpen) {
          setAnimateOut(true);
          setTimeout(() => {
            setMenuOpen(false);
            setAnimateOut(false);
          }, 400);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className=" text-white z-50 fixed w-full">
      <nav className="bg-secondary flex items-center justify-between relative px-6 md:px-8 z-20 h-14 lg:h-18 2xl:h-24">
        <Link to="/" aria-label="Home page">
          <HovLogo className="h-9 lg:h-12 2xl:h-16" />
        </Link>

        <ul className="gap-10 text-lg 2xl:text-xl hidden lg:flex">
          <li>
            <Link to="/#about">{t('common.header.about')}</Link>
          </li>
          <li>
            <Link to="/#contact">{t('common.header.contact')}</Link>
          </li>
          <li>
            <a
              href="https://campio.no/nb/campsite/hov-hyttegrend?rid=60bfcc8567d01f20b7644593b9e5c8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Booking
            </a>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        <button ref={buttonRef} className="lg:hidden hover:cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen || animateOut ? (
            <IconX className="w-6 h-6" />
          ) : (
            <IconMenu className="w-6 h-6" />
          )}
        </button>

        {(isMenuOpen || animateOut) && (
          <div
            ref={menuRef}
            className={`fixed right-0 top-14 z-50 w-64 h-screen bg-secondary flex flex-col 
      ${animateOut ? 'animate-slide-bounce-out' : 'animate-slide-in'}`}
          >
            <div className="flex-1 ">
              <ul className="flex flex-col items-end gap-6 px-8 py-8 text-white">
                <li>
                  <Link to="/#about">{t('common.header.about')}</Link>
                </li>
                <li>
                  <Link to="/#contact">{t('common.header.contact')}</Link>
                </li>
                <li>
                  <a
                    href="https://campio.no/nb/campsite/hov-hyttegrend?rid=60bfcc8567d01f20b7644593b9e5c8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Booking
                  </a>
                </li>
                <li>
                  <LanguageSwitcher />
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
      <div className="w-250 md:w-full">
        <Vector1
          className="lg:w-full overflow-x-hidden w-full text-secondary"
          style={{ filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.25))' }}
        />
      </div>
    </header>
  );
}
