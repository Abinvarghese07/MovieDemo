import React from 'react';

const Searchbox = (props) => {
    return (
        <div className='searchBoxContainer'>
            <input value={props.value} onChange={(e) => props.setSearchValue(e.target.value)} type='search' placeholder='search for movies'></input>
            
        </div>
    );
};

export default Searchbox;