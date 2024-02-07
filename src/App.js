import logo from './logo.svg';
import './App.css';
import { Carousel } from './carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Carousel>
        <div className="item item-1">item1</div>
        <div className="item item-2">item2</div>
        <div className="item item-3">item3</div>
      </Carousel>
    </div>
  );
}

export default App;
