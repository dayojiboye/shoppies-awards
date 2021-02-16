import React from 'react';

import ShoppiesLogo from '../../../assets/icons/shoppies-logo.svg';
import { ArchiveSvg } from '../../../assets/icons';

import './styles.scss';

const header = ({ clicked }) => {
  return (
    <header className="header _max_width">
      <nav className="nav">
        <div className="hamburger_btn">
          <button aria-label="menu button" onClick={clicked}>
            <ArchiveSvg />
          </button>
        </div>

        <div className="shoppies_logo">
          <img src={ShoppiesLogo} alt="shoppies logo" />
        </div>
      </nav>
    </header>
  );
};

export default header;
