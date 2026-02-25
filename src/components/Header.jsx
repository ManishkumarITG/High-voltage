import React from "react";

export default function Header() {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        Free shipping for orders over $200 (US only)
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        <div className="logo">
          <h1>
            <a href="#">
              <img src="src/assets/brandlogo.png" alt="HVI Logo" className="logo-image" height="40" />
            </a>
          </h1>
        </div>

        <nav className="nav-links">
          <a href="#">NEW PRODUCTS</a>
          <a href="#">SHOP ALL PRODUCTS</a>
          <a href="#">ABOUT HVI</a>
          <a href="#">CONTACT US</a>
        </nav>

        <div className="icons">
          <span><img src="src/assets/search.png" alt="Search Icon" className="search-icon" /></span>
          <span><img src="src/assets/user.png" alt="User Icon" className="user-icon" /></span>
          <span><img src="src/assets/search.png" alt="Cart Icon" className="cart-icon" /></span>
          {/* src\assets\Bag 1.png */}
        </div>
      </div>
    </header>
  );
};

