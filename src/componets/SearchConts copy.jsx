import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Videos } from './';

const SearchConts = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchTerm}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log(error));
  }, [searchTerm]);

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

export default SearchConts;
