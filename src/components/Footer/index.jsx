import React from 'react';
import './style.scss';

const mainLinks = [
  'Link 1',
  'Link2',
  'Link3',
];

const subLinks = [
  'Sub link 1',
  'Sub link 2',
  'Sub link 3',
  'Sub link 4',
  'Sub link 5',
];

const lastLinks = [
  'Terms & Conditions',
  ' | ',
  'Privacy Policy',
  ' | ',
  'FAQs',
];

function Footer() {
  return (
    <div className="footer">
      <div id="container1">
        <nav>links</nav>
        <div>newsletter and socials</div>
      </div>
      <div className="container2">
        <p>@2021 CompanyName. All right reserved</p>
        <ul>
          {lastLinks.map((link) => (
            <li>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
