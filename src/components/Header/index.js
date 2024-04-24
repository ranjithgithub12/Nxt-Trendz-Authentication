import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-image"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
      <button className="logout-button-disktop">Logout</button>
      <button className="logout-button-mobile">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-button-image"
        />
      </button>
    </div>
    <div className="link-for-mobile">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="header-images"
        />
      </Link>
      <Link to="/product">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="header-images"
        />
      </Link>
      <Link to="/cart">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="header-images"
        />
      </Link>
    </div>
  </nav>
)

export default Header
