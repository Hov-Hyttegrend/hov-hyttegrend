import HovLogo from '../assets/svg/Hov-logo.svg?react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white w-full py-20 px-7">
      <div className="flex flex-col lg:flex-row justify-center">
        <HovLogo className="h-24" />
        <div className="flex flex-col gap-5">
          <ul>
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
          </ul>

          <ul>
            <li>post@hovhyttegrend.no</li>
            <li>+47 400 67 568</li>
            <li className="flex flex-col ">
              Åpningstider:<span>09:00 - 11:00 | 18:30 - 20:00</span>
            </li>
          </ul>

          <ul>
            <li>Hov Hyttegrend</li>
            <li>Gaularfjellsvegen 2203</li>
            <li>6978 Viksdalen</li>
          </ul>

          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      <p className="w-full text-center text-xs">
        &copy; {new Date().getFullYear()} Hov Hyttegrend. All rights reserved.
      </p>
    </footer>
  );
}
