import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillYoutube } from 'react-icons/ai';
import SearchBar from './SearchBar';

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <AiFillYoutube className="icon" />
          hyun Youtube
        </Link>
      </h1>
      <SearchBar className="search" />
    </header>
  );
};

export default HeaderCont;
