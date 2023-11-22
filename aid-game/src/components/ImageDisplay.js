import React from 'react';

function ImageDisplay({ image }) {
    return (
        <div>
            <img src={image.url} alt={image.description} />
            <p>{image.description}</p>
        </div>
    );
}

export default ImageDisplay;
