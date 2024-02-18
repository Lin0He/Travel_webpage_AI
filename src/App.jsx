import React, {useEffect} from 'react';
import SearchEngine from './component/SearchBar/SearchEngine';
import Navbar from './component/Navbar/Navbar';
import Intro from './component/Introduction/Intro';
import Contact from './component/Contact/Contact';
import Demo from './component/Demo/Demo';
import Home from './component/Home/Home';
import Drink from './component/Drink/Drink';
import Eat from './component/Eat/Eat';
import "./App.css"


function App() {

  useEffect(() => {

    const addActiveClass = (entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("section-fade-in");
          entry.target.classList.remove("section-fade-out");
        }else{
          entry.target.classList.add("section-fade-out");
          entry.target.classList.remove("section-fade-in");
        }
      })
    };
  
    const options ={
      threshold:0.1,
    };
    const observer = new IntersectionObserver(addActiveClass, options);
    const sections = document.querySelectorAll("section");
  
    sections.forEach(section => {
      observer.observe(section);
    });
    return () => observer.disconnect();
    }, []);

  return(
    <html>
        <Navbar/>
        <Home/>
        <Intro/>
        <Demo/>
        <Drink/>
        <Eat/>
        <SearchEngine/>
        <Contact/>
    </html>
    )
}

export default App
