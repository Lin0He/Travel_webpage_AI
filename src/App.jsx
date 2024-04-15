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
