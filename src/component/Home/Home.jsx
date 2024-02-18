import React, { useEffect, useRef, useState} from 'react';
import "./Home.css"
import Forest from './../../video/In_forest_1080p.mp4';
import Ocean from './../../video/ocean_turquoise_1080p.mp4';
import SingleMan from './../../video/Singleman_drinking_dawn_1080p.mp4';
import DrinkingTea from './../../video/Drinking_Tea_1080p.mp4';
import Canal from './../../video/Amsterdam_boattrip_1080p.mp4';
import Plan from './../../video/Plan_1080p.mp4';

const Home = () => {
  const [backgroundVideo, setBackgroundVideo] = useState(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [activePage, setActivePage] = useState(null);


  useEffect(() => {
  const addActiveClass = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        let videoId = entry.target.id;
        let selectedVideo;
        switch (videoId) {
          case 'intro':
            selectedVideo = Forest;
            break;
          case 'demo':
            selectedVideo = Canal;
            break;
          case 'search':
            selectedVideo = Ocean;
            break;
          case 'drink':
            selectedVideo = DrinkingTea;
            break;
          case 'eat':
            selectedVideo = SingleMan;
            break;
          case 'contact':
            selectedVideo = Plan;
            break;
        }
        setActivePage(videoId);
        setVideoOpacity(0);
        // Wait for fade-out transition, then change video and fade in
        setTimeout(() => {
          setBackgroundVideo(selectedVideo);
          setVideoOpacity(1); // Fade in the new video
        }, 500);
      }
    });
  };
    

  const options ={
    threshold:0.9,
  };
  const observer = new IntersectionObserver(addActiveClass, options);
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    observer.observe(section);
  });
  return () => observer.disconnect();
  }, []);

  
  return (
    <div>
      <div className="video-container">
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          loop
          src={backgroundVideo}
          className='video-visible'
          style={{ opacity: videoOpacity }}
        ></video>
      </div>
      <div className='logo'>
        <h1>Logo</h1>
      </div>
    </div>
  );
};

export default Home;
