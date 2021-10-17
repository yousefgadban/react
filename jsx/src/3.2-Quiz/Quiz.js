import QuizTitle from './QuizTitle';
import Q1 from './Q1';
import Q2 from './Q2';

const Quiz = () => {
    return(
        <div style={{width: '30vw', margin: '30px', padding: '20px', border: '1px solid black'}}>
            <QuizTitle />
            <Q1 />
            <Q2 />
        </div>
    )
}

export default Quiz;