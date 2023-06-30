import React from 'react';

const VideosItem = ({ youtube }) => {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={youtube.snippet.thumbnails.medium.url}
          alt={youtube.snippet.title}
        />
        <span>{youtube.snippet.title}</span>
      </a>
    </li>
  );
};

const Videos = ({ youtubes }) => {
  return (
    <div className="Cont">
      <ul>
        {youtubes.map((youtube, index) => (
          <VideosItem key={index} youtube={youtube} />
        ))}
      </ul>
    </div>
  );
};

export default Videos;
