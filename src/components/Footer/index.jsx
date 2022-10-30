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
            <input type="text" placeholder="Your email address" className="email" />
            <input type="submit" value="SIGN UP" className="submit" />
          </form>

          <div className="icon-div">
            <p>FIND US ON</p>

            <div className="icons">
              <i className="fa-brands fa-square-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
            </div>
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
