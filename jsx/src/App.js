import logo from './logo.svg';
import './App.css';
import Q21 from './2-jsx/Q21';
import Q22 from './2-jsx/Q22';
import Boxes from './3-Components/Boxes'
import Quiz from './3.2-Quiz/Quiz';
import Button from './4-buttons/Button';
import Card from './cards/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Q21 />
        <Q22 />
        <hr />
      </header>

        <div className="Q3">
          <Boxes />
        </div>
        <hr />
        <div className="Q3">
          <Quiz />
        </div>
        <hr />
          <Button text='important' isBold='bold' />
          <Button text='important' isBold='initial' />
        <hr />
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Card />
          <Card />
          <Card />
        </div>
        
        <hr />
    </div>
  );
}

export default App;
