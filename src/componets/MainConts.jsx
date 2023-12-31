import React, { useEffect, useState } from 'react';
import { Category, Videos } from './';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('essential');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${selectCategory}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.items);
        setVideos(result.items);
      })
      .catch((error) => console.log(error));
  }, [selectCategory]);

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
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;
