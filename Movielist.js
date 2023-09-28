import React from 'react';

const Movielist = (props) => {
    return (
        <div className='movieCards'>
            {
                props.movieDetails.map((movies,index) => <div>
                    <img className='imageContainer' src={movies.Poster} alt='movieTitle'></img>
                </div>)
                
            }
            
        </div>
    );
};

export default Movielist;   