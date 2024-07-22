import React from 'react';
import './TrendingNews.css';


const trendingNewsData = [
  {
    id: 1,
    title: "Will Xander Boegarts Return to Form?",
    date: "22 July 2024",
    image: "", // Add the path to the image if available
  },
  {
    id: 2,
    title: "Just how good is Fernando Tatis Jr?",
    date: "22 July 2024",
    image: "", // Add the path to the image if available
  },
  {
    id: 3,
    title: "Analyzing Machado's contract against his stats",
    date: "22 July 2024",
    image: "", // Add the path to the image if available
  },
];

function TrendingNews() {
  return (
    <div className="trending-news">
      {trendingNewsData.map(news => (
        <div className="news-item" key={news.id}>
          <div className="news-image" style={{ backgroundImage: `url(${news.image})` }}></div>
          <div className="news-content">
            <h3>{news.title}</h3>
            <div className='spacer'> </div>
            <p>{news.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrendingNews;
