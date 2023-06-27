import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillYoutube } from 'react-icons/ai';

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <AiFillYoutube className="icon" />
          hyun Youtube
        </Link>
      </h1>
      <div className="search">
        <label className="glass" htmlFor="search"></label>
        <input
          type="text"
          id="searchInput"
          className="input__search"
          placeholder="유투버를 검색하세요"
          title="검색"
        />
      </div>
    </header>
  );
};

export default HeaderCont;
