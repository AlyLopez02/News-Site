import React from 'react';
import './style.scss';
import logo from '../../assets/logo.png';

const mainNavLinks = [
  'Workspace',
  'Membership',
  'Community',
];

const secondaryNavLinks = [
  'Contact',
  'Join Us',
  'Login',
];

function Header() {
  return (
    <div className="header">
      <div className="container">
        <header>
          <img src={logo} alt="placeholder" />
          <nav className="navigation">
            <ul>
              {mainNavLinks.map((link) => (
                <li>{link}</li>
              ))}
            </ul>

            <ul>
              {secondaryNavLinks.map((link) => (
                <li>{link}</li>
              ))}
            </ul>

          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
