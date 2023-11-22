import './App.css';
import React, { useEffect, useState } from 'react';
import ad from './images/ad.png';
import irl from './images/irl.png';
import ImageDisplay from './components/ImageDisplay';
import TextDisplay from './components/TextDisplay';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [prediction, setPrediction] = useState('I predict that this is a bike');
  const [details, setDetails] = useState(
    'This is an e-bike, please rate the quality of the prediction and describe how acurate the prediction is based on the image'
  );

  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // New state for current image index

  useEffect(() => {
    fetch('http://localhost:3001/api/images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); // Loop back to the first image after the last one
  };

  return (
    <div className="App">
      <TextDisplay text={prediction} />

      <div className="images-container">
        {images.length > 0 && <ImageDisplay image={images[currentIndex]} />}
        <button onClick={handleNextClick}>Next</button>
      </div>

      <TextDisplay text={details} />
      <FeedbackForm />
    </div>
  );
}

export default App;
