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
      <div className="container1">
        <nav>
          <ul className="firstLinkGroup">
            {mainLinks.map((link) => (
              <li>{link}</li>
            ))}
          </ul>

          <div className="sub">
            <ul>
              {subLinks.map((link) => (
                <li>{link}</li>
              ))}
            </ul>

            <ul>
              {subLinks.map((link) => (
                <li>{link}</li>
              ))}
            </ul>

            <ul>
              {subLinks.map((link) => (
                <li>{link}</li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="sign-and-socials">
          <p>STAY UP TO DATE WITH OUR NEWSLETTER</p>

          <form>
            <input type="text" placeholder="Your email address" />
            <input type="submit" value="Sign Up" />
          </form>

          <p>FIND US ON</p>

          <div id="icons">
            icons
          </div>

        </div>
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
