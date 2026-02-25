import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: Brand & About */}
        <div className="footer-column brand-section">
          <div className="footer-logo">
            <img src="src/assets/brandlogo.png" alt="High Voltage Industries" height="40"/>
          </div>
          <p className="footer-description">
            Second generation IBEW. For over five years, I've built an Instagram 
            account highlighting the High Voltage Industry across the U.S. and 
            the world, showing all aspects this industry has to offer.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="/new-products">New Products</a></li>
            <li><a href="/shop">Shop All Products</a></li>
            <li><a href="/about">About HVI</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Section 3: Support */}
        <div className="footer-column">
          <h3>SUPPORT</h3>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/refund">Refund Policy</a></li>
            <li><a href="/shipping">Shipping Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Section 4: Newsletter */}
        <div className="footer-column newsletter-section">
          <h3>NEWSLETTER</h3>
          <p>Sign up for our newsletter to stay informed on product launches, giveaways, sales and more.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email Address" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Bar: Copyright & Payments */}
      <div className="footer-bottom">
        <p className="copyright">© 2024 High Voltage Industries.</p>
        <div className="payment-icons">
          <span className="payment-card visa">
            <img src="src/assets/Visa_2_.png" alt="Visa" height="100%"/>
          </span>
          <span className="payment-card mastercard">
            <img src="src/assets/Master_Card_2_.png" alt="MasterCard" height="100%"/>
          </span>
          <span className="payment-card amex">
            <img src="src/assets/Amex_2_.png" alt="American Express" height="100%"/>
          </span>
          <span className="payment-card paypal">
            <img src="src/assets/PayPal_2_.png" alt="PayPal" height="100%"/>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;