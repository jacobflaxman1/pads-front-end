import React from 'react';
import './RecentNews.css';

function RecentNews() {
  return (
    <div className="recent-news">
      <div className="news-item">
        <div className="news-image"></div>
        <div className="news-content">
          <h3>Baku 2023 Taekwondo Championships</h3>
          <p>03 June 2023</p>
        </div>
      </div>
      <div className="news-item">
        <div className="news-image"></div>
        <div className="news-content">
          <h3>Open Championship Royal Liverpool Golf</h3>
          <p>02 June 2023</p>
        </div>
      </div>
    </div>
  );
}

export default RecentNews;
