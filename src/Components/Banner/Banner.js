import React from 'react';
import './Banner.css';
import heroImage from '../../assets/fernando-large.jpg'; // Import the hero image

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="banner-content">
        <h1>Padres Data Deep Dives</h1>
        <p>
          Bringing data analytics and commentary to the San Diego Padres Community
        </p>
      </div>
    </div>
  );
}

export default Banner;
