import { useEffect, useRef, useState } from 'react';
import LOGO from '../assets/svg/Hov-Hyttegrend-NEG.svg';
import VECTOR1 from '../assets/svg/Vector1.svg';
import iconX from '../assets/svg/icon-X.svg';
import iconMenu from '../assets/svg/icon-BurgerMenu.svg';
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
        <img src={LOGO} alt="Hov Hyttegrend logo" className="h-12" />

        <ul className="gap-10 text-xl hidden lg:flex">
          <li>Om oss</li>
          <li>Kontakt</li>
          <li>Booking</li>
          <li>Info</li>
          <li>Aktiviteter</li>
          <LanguageSwitcher />
        </ul>

        <button ref={buttonRef} className="lg:hidden hover:cursor-pointer" onClick={toggleMenu}>
          <img
            src={isMenuOpen || animateOut ? iconX : iconMenu}
            alt={isMenuOpen || animateOut ? 'Close menu' : 'Open menu'}
            className="w-6 h-6"
          />
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
                <LanguageSwitcher />
              </ul>
            </div>
          </div>
        )}
      </nav>
      <div className="w-250 md:w-full">
        <img
          src={VECTOR1}
          alt="Vector pattern line"
          className=" lg:w-full overflow-x-hidden w-full"
        />
      </div>
    </header>
  );
}
