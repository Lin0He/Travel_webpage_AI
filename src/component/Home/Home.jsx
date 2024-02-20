import React, { useEffect, useRef, useState} from 'react';
import "./Home.css"
import Forest from './../../video/In_forest_1080p.mp4';
import Ocean from './../../video/Ocean_1080p.mp4';
import SingleMan from './../../video/Singleman_drinking_dawn_1080p.mp4';
import DrinkingTea from './../../video/Drinking_Tea_1080p.mp4';
import Canal from './../../video/Amsterdam_boattrip_1080p.mp4';
import Plan from './../../video/Plan_1080p.mp4';

//import Forest from 'https://media.githubusercontent.com/media/Lin0He/Travel_webpage_AI/main/src/video/In_forest_1080p.mp4';


import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
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
            selectedVideo = "https://github.com/Lin0He/Travel_webpage_AI/raw/main/src/video/In_forest_1080p.mp4";
            break;
          case 'demo':
            selectedVideo = "https://github.com/Lin0He/Travel_webpage_AI/raw/main/src/video/Amsterdam_boattrip_1080p.mp4";
            break;
          case 'searchbar':
            selectedVideo = "https://github.com/Lin0He/Travel_webpage_AI/raw/main/src/video/Ocean_1080p.mp4";
            break;
          case 'drink':
            selectedVideo = "https://github.com/Lin0He/Travel_webpage_AI/raw/main/src/video/Drinking_Tea_1080p.mp4";
            break;
          case 'eat':
            selectedVideo = "https://github.com/Lin0He/Travel_webpage_AI/raw/main/src/video/Plan_1080p.mp4";
            break;
          case 'contact':
            selectedVideo = "https://github.com/Lin0He/Travel_webpage_AI/raw/main/src/video/Plan_1080p.mp4";
            break;
          // case 'intro':
          //   selectedVideo = Forest;
          //   break;
          // case 'demo':
          //   selectedVideo = Canal;
          //   break;
          // case 'searchbar':
          //   selectedVideo = Ocean;
          //   break;
          // case 'drink':
          //   selectedVideo = DrinkingTea;
          //   break;
          // case 'eat':
          //   selectedVideo = SingleMan;
          //   break;
          // case 'contact':
          //   selectedVideo = Plan;
          //   break;
        }
        setActivePage(videoId);
        setVideoOpacity(0);
        // Wait for fade-out transition, then change video and fade in
        setTimeout(() => {
          setBackgroundVideo(selectedVideo);
          setVideoOpacity(1); // Fade in the new video
        }, 400);
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
        <h1>Travel</h1>
        <div className='logo-icon'>
        <icon><FaXTwitter /></icon>
        <icon><FaInstagram /></icon>
        <icon><FaYoutube /></icon>
        </div>
      </div>
    </div>
  );
};

export default Home;
