import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {branding} = props;
  return (
    <nav className="navbar navbar-expand-sm bg-danger navbar-dark mb-5 py-2">
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-2">
              <a href="/" className="nav-link text-white">
                Home
              </a>
            </li>
            <li className="nav-item mr-2">
              <a href="/" className="nav-link text-white">
                Contact
              </a>
            </li>
            <li className="nav-item mr-2">
              <a href="/" className="nav-link text-white">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: "My App Title"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;