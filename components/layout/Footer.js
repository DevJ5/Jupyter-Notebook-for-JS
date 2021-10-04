import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes['footer']}>
      <div className={classes['main-part']}>
        <div className={classes['footer-list-wrapper']}>
          <h3 className={classes['footer-heading']}>Majestic Hotel</h3>
          <ul className={classes['footer-list']}>
            <li className={classes['footer-list-item']}>
              <a href="#" className={classes['footer-list-link']}>
                support@Majestichotel.com
              </a>
            </li>
            <li className={classes['footer-list-item']}>
              <a href="#" className={classes['footer-list-link']}>
                Amsterdam, Abhrahamstraat 101
              </a>
            </li>
            <li className={classes['footer-list-item']}>
              <a href="#" className={classes['footer-list-link']}>
                Tel: 020 - 656 2309
              </a>
            </li>
          </ul>
        </div>
        <div className={classes['footer-list-wrapper']}>
          <h3 className={classes['footer-heading']}>Explore</h3>
          <ul className={classes['footer-list']}>
            <li className={classes['footer-list-item']}>
              <a href="#" className={classes['footer-list-link']}>
                Home
              </a>
            </li>
            <li className={classes['footer-list-item']}>
              <a href="#" className={classes['footer-list-link']}>
                About Us
              </a>
            </li>
            <li className={classes['footer-list-item']}>
              <a href="#" className={classes['footer-list-link']}>
                Rooms
              </a>
            </li>
            <li className={classes['footer-list-item']}>
              <a href="#" className={classes['footer-list-link']}>
                Events
              </a>
            </li>
            <li className={classes['footer-list-item']}>
              <a href="#" className={classes['footer-list-link']}>
                Customers
              </a>
            </li>
            <li className={classes['footer-list-item']}>
              <a href="#" className={classes['footer-list-link']}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={classes['contact']}>
          <h3 className={classes['footer-heading']}>Contact</h3>
          <p>Sign Up for News</p>
          <form className={classes['footer-form']}>
            <input
              type={classes['text']}
              className={classes['footer-input']}
              placeholder="Your email..."
            />
            <button className={classes['footer-btn']}>Sign Up</button>
          </form>
        </div>
        ;
      </div>
    </footer>
  );
};

export default Footer;
