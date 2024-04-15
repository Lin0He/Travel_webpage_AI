import React, {useState} from 'react';
import OpenAI from "openai";
import { useNavigate } from 'react-router-dom';
import "./SearchBar.css"
const key = "";
const openai = new OpenAI({apiKey:String(key), dangerouslyAllowBrowser: true });

import { IoSearchSharp } from "react-icons/io5";


const SearchEngine = () => {

    const [searchTerm, setSearchTerm] = useState(''); // State for the search term input by the user


    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    
    const handleSearch = () => {
        navigate(`/response`);
    };


    return (
        <section className='searchbar-container' id='searchbar'>
            <div className='searchbar-box'>
                <div className='searchbar-div'>
                <span className='searchbar-icon'><IoSearchSharp /></span>
                <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Plan your journey"
                className='input-text'
                />
                <button onClick={handleSearch} className='searchbar-button'>Explore</button>
                </div>
                
            </div>
            
            {/* <div className='results'>
                {results ? <p>{results}</p> : <p>No results</p>} 
            </div> */}
        </section>
    )
}

export default SearchEngine