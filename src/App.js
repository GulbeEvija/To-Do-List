import imageOne from './list.png';
import imageTwo from './progress.png';
import './App.css';
import { Task } from './Task';


function App() {
  return (
    <div className="App">
      <div>
        <img src={imageOne} width="100px" alt="To do list" />
      </div>
      <div>
        <h1>Let's get things done!</h1>
      </div>
      <div>
        <Task />
      </div>
      <div>
        <img className='circle' src={imageTwo} width="100px" alt="Progress" />
      </div>
    </div>
  );
}

export default App;
