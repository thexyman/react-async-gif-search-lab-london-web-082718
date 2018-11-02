import React from 'react'

const displayGif = (gif, idx) => {
    return (
        <li key={idx} > 
            <img src={gif.images.original.url} />
        </li>
    )
}

const GifList = (props) => 
    <ul>
        {props.gifs.map((gif, idx) => displayGif(gif, idx))}
    </ul>


GifList.defaultProps = {
    gifs: []
  };
  
export default GifList  
