import React, { useState } from 'react';
import './App.css';
import image1 from './images/image1.jpg' ;
import image2 from './images/image2.jpg' ;
import image3 from './images/image3.jpg' ;


function App() {
  const [selectedImage, setSelectedImage] = useState(image1);


  const handleButtonClick = () => {
    // Change the selected image based on the button click
    // You can add more logic here based on your image gallery
    // For simplicity, we'll rotate through the images
    if (selectedImage === image1) {
      setSelectedImage(image2);
    } else if (selectedImage === image2) {
      setSelectedImage(image3);
    } else {
      setSelectedImage(image1);
    }
  };


  const handleInputChange = (event) => {
    // Display a different image based on user input
    // You can add more logic here based on your image gallery
    // For simplicity, we'll use the input value as the image number
    const inputValue = event.target.value;
    if (inputValue === '1') {
      setSelectedImage(image1);
    } else if (inputValue === '2') {
      setSelectedImage(image2);
    } else if (inputValue === '3') {
      setSelectedImage(image3);
    } else {
      // Display a default image or handle invalid input
      setSelectedImage(image1);
    }
  };


  return (
      <div className="App">
        <header className="App-header">
          <img src={selectedImage} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input
              type="text"
              placeholder="Enter image number (1-3)"
              onChange={handleInputChange}
          />
          <button onClick={handleButtonClick}>Change Image</button>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}


export default App;