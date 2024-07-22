import React from 'react';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import TrendingNews from './Components/TrendingNews/TrendingNews';
import RecentNews from './Components/RecentNews/RecentNews';
import ClubRanking from './Components/ClubRanking/ClubRanking';
import Footer from './Components/Footer/Footer';
import './App.css';



/*
  TODO: Finish up template -> write first article -> reddit post to get writers -> ads? -> fangraphs api to get data 

*/

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <TrendingNews />
      <ClubRanking />
      <Footer />
    </div>
  );
}

export default App;
