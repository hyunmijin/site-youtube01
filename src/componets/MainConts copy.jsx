import React, { useEffect, useState } from 'react';
import { Category, Videos } from './';
import { useParams } from 'react-router-dom';
// import Loader from './Loader';

const MainConts = () => {
  // const [selectCategory, setSelectCategory] = useState('essential');
  const [videos, setVideos] = useState();
  const { searchTerm } = useParams();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${selectCategory}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log(error));
  }, [searchTerm]);

  // if (!videos?.items) return <Loader />;

  return (
    <main id="main">
      <section id="search">
        <h2>
          <em>{searchTerm}</em>
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;
