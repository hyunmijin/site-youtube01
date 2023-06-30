import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVideoDetail(result.items[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, channelDesc },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__sub">
          <div className="left">
            <div className="play">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
            </div>
            <div className="desc">
              <h3>{title}</h3>
              <div>
                <Link
                  to={`/channel/${channelId}`}
                  style={{ color: 'black', fontSize: '20px' }}
                >
                  {channelTitle}
                </Link>
                <div>
                  <span>조회수 {viewCount}회</span>
                  <span>좋아요 {likeCount}회</span>
                </div>
              </div>
              <div>{channelDesc}</div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};
export default VideoConts;
