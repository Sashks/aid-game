import './App.css';
import React, { useState } from 'react';
import ad from './images/ad.png';
import irl from './images/irl.png';
import ImageDisplay from './components/ImageDisplay';
import TextDisplay from './components/TextDisplay';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [prediction, setPrediction] = useState('I predict that this is a bike');
  const [details, setDetails] = useState(
    'This is an e-bike add, please rate the quality of the prediction and describe how acurate the prediction is based on the image'
    );
  const [sourceImage, setSourceImage] = useState(ad);
  const [explanaitionImage, setExplanaitionImage] = useState(irl);

  return (

    <div className="App">
            <TextDisplay text={prediction} />
            <div className="images-container">
              <ImageDisplay myImage={sourceImage} />
              <ImageDisplay myImage={explanaitionImage} />
            </div>
            <TextDisplay text={details} />
            <FeedbackForm />
    </div>
  );
}

export default App;
