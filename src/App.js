import logo from './logo.svg';
import './App.css';
import { Slider } from './Slider/Slider';
import { Axios } from './Axios/Axios';
import { useEffect } from 'react';
import { getPosts } from './Axios/api';
import { Slider2 } from './Slider2/Slider2';
import { Page } from './Page/Page';

function App() {
  return (
    <div className="App">
      <Slider slides={slides}></Slider>
    </div>
  );
}
const slides = [
  {
      image: "images/cat1.jpg"
  },
  {
      image: "images/cat2.jpg"
  },
  {
    image: "images/cat2.jpg"
  },
  {
    image: "images/cat4.jpg"
},
{
  image: "images/cat5.jpg"
},
{
  image: "images/cat6.jpg"
}
];

export default App;
