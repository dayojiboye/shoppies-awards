import React from 'react';

import ShoppiesLogo from '../../../assets/icons/shoppies-logo.svg';
import { ArchiveSvg } from '../../../assets/icons';

import './styles.scss';

const header = ({ clicked, isSidebar, nominations }) => {
  return (
    <header className={`header _max_width ${isSidebar ? 'fixed' : ''}`}>
      <nav className="nav">
        <div className="hamburger_btn">
          <button aria-label="menu button" onClick={clicked}>
            <ArchiveSvg />
          </button>

          {nominations && nominations.length > 0 && (
            <span>{nominations.length}</span>
          )}
        </div>

        <div className="shoppies_logo">
          <img src={ShoppiesLogo} alt="shoppies logo" />
        </div>
      </nav>
    </header>
  );
};

export default header;
