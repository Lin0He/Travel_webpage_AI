import React, {useState} from 'react';
import OpenAI from "openai";
//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
import "./SearchBar.css"
const key = "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";
const openai = new OpenAI({apiKey:String(key), dangerouslyAllowBrowser: true });

import { IoSearchSharp } from "react-icons/io5";
import { GoPaperAirplane } from "react-icons/go";

const SearchEngine = () => {

    const [searchTerm, setSearchTerm] = useState(''); // State for the search term input by the user
    const [results, setResults] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    async function fetchData(query) {
            const stream = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [{ role: "user", content: query }],
                stream: true,
            });
            let result = '';
            for await (const chunk of stream) {
                result += chunk.choices[0]?.delta?.content || "";
            }
            setResults(result); // Update the results state with the fetched data
       
    }
    const handleSearch = () => {
        fetchData(searchTerm);
    };




    return (
        <section className='searchbar-container' id='search'>
            <div className='searchbar-box'>
                
                <span className='searchbar-icon'><IoSearchSharp /></span>
                <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Plan your journey"
                className='input-text'
                />
                <button onClick={handleSearch} className='searchbar-button'><GoPaperAirplane   /></button>
            </div>
            
            <div className='results'>
                {results ? <p>{results}</p> : <p>No results</p>} 
            </div>
        </section>
    )
}

export default SearchEngine