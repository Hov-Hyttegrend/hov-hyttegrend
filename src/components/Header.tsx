import { useEffect, useRef, useState } from 'react';
import HovLogo from '../assets/svg/Hov-logo.svg?react';

import Vector1 from '../assets/svg/Vector1.svg?react';
import IconX from '../assets/svg/icon-X.svg?react';
import IconMenu from '../assets/svg/icon-BurgerMenu.svg?react';

import LanguageSwitcher from './language/LanguageSwitcher';

export default function Header() {
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
      <nav className="bg-secondary flex items-center justify-between relative px-8 z-20 h-18">
        <HovLogo className="h-12" />

        <ul className="gap-10 text-xl hidden lg:flex">
          <li>Om oss</li>
          <li>Kontakt</li>
          <li>Booking</li>
          <li>Info</li>
          <li>Aktiviteter</li>
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
            className={`fixed right-0 top-18.5 z-50 w-64 h-screen bg-secondary flex flex-col 
      ${animateOut ? 'animate-slide-bounce-out' : 'animate-slide-in'}`}
          >
            <div className="flex-1 overflow-y-auto overscroll-contain [--tw:1] [-webkit-overflow-scrolling:touch]">
              <ul className="flex flex-col items-end gap-6 px-8 py-8 text-white">
                <li>Om oss</li>
                <li>Kontakt</li>
                <li>Booking</li>
                <li>Info</li>
                <li>Aktiviteter</li>
                <li>
                  <LanguageSwitcher />
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
      <div className="w-250 md:w-full">
        <Vector1 className=" lg:w-full overflow-x-hidden w-full text-secondary" />
      </div>
    </header>
  );
}
