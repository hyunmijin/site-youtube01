import React, { useState } from 'react';
import { Category, Videos } from './';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('essential');

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory}유투버</h2>
        <Videos />
      </section>
    </main>
  );
};

export default MainConts;
