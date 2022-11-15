import React, { useState } from 'react';
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import {  useNavigate } from 'react-router-dom';





    function Search ({ hideButtons = false }) {

    const [input, setInput] = useState('')
    const navigate = useNavigate();


    const search = e => {
        e.preventDefault();
        console.log('you hit the search button >>', input)

        // do something with the input
        navigate('/search')
    }

    return (
        <form className='search'>
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (
                            <div className="search__buttons">
                            <button  type='submit' onClick={search}>Google Search</button>
                           <button >I'm Feeling Artistic</button>
                       </div>
            ): (
                <div className="search__buttons">
                <button className="search__buttonsHidden" type='submit' onClick={search} >Google Search</button>
           <button className="search__buttonsHidden" >I'm Feeling Artistic</button>
           </div>
            )}


           
        </form>
    );
}

export default Search;
