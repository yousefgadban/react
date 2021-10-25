import logo from './logo.svg';
import './App.css';
import Q21 from './2-jsx/Q21';
import Q22 from './2-jsx/Q22';
import Boxes from './3-Components/Boxes'
import Quiz from './3.2-Quiz/Quiz';
import Button from './4-buttons/Button';
import Card from './cards/Card';
import Increment from './7-state/Increment';
import Hide from './7-state/Hide';
import LifeCycle from './lifecycle/LifeCycle'
import AnimBox from './lifecycle/AnimBox';
import Circle from './lifecycle/circle'
import Spinner from './Spinner/Spinner'
import ShowSpinner from './lifecycle/ShowSpinner';
import Chuck from './chuck/Chuck';
import Parent from './11-parentToChild/Parent';
import Forms from './11-parentToChild/forms';
import FormSubmit from './11-parentToChild/FormSubmit';
import DataMasseging from './data-masseging/DataMasseging';
import LifeMapping from './lifeMapping/LifeMapping';
import Landing from './landing/Landing';
import { ReadMore } from './readMore/ReadMore';
import { Todo } from './readMore/Todo';
import { CheckBoxx } from './readMore/checkboxx';

function App() {
  return (
      
    <div>
       <CheckBoxx />
    </div>

/*
<ReadMore text='lorems  dsaf dsafdasf  dsfadsf dsadsaf  dsafdas  dsafasdf' len={10} />
<ReadMore text='lorems  dsaf dsafdasf  dsfadsf dsadsaf  dsafdas  dsafasdf' len={20} />
<Landing />
<LifeMapping />
<DataMasseging />
<FormSubmit />
<Forms checked={true} text='aaaa' />
<Forms checked={true} text='bbbb' />
<Forms checked={false} text='cccc' />
<Forms checked={false} text='ddddd' />
*/

    // <Parent />
/* <ShowSpinner /> */

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <Q21 />
    //     <Q22 />
    //     <hr />
    //   </header>

    //     <div className="Q3">
    //       <Boxes />
    //     </div>
    //     <hr />
    //     <div className="Q3">
    //       <Quiz />
    //     </div>
    //     <hr />
    //       <Button text='important' isBold='bold' />
    //       <Button text='important' isBold='initial' />
    //     <hr />
    //     <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
    //       <Card />
    //       <Card />
    //       <Card />
    //     </div>
    //     <hr />
    //       <Increment />
    //     <hr />
    //       <Hide />
    //     <hr />
    //       <LifeCycle />
    //     <hr />
    //       <AnimBox size='100px' color='yellow' name="box1" />
    //       <AnimBox size='150px' color='black' name="box2" />
    //       <AnimBox size='200px' color='gray' name="box3" />
    //     <hr />
    //     <Circle />
    // </div>
  );
}

export default App;
