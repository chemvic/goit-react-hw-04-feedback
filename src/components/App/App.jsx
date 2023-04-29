import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';


const App =()=> {
    const [good, setGood ]=useState(0);
    const [neutral, setNeutral ]=useState(0);
    const [bad, setBad ]=useState(0);

 
 const handleIncrement=(option)=>{   
   
    switch(option){
        case 'good':
            setGood(state => state + 1);
            break;
        case 'neutral':
            setNeutral(state => state + 1);
            break;
        case 'bad':
            setBad(state => state + 1);
            break;
            default:
                return;
    }}

const countTotalFeedback = () => { 
  return good + neutral + bad;
}

const countPositiveFeedbackPercentage = () => { 
  return Math.round((good / countTotalFeedback()) * 100);
}



const total = countTotalFeedback();
const positiveFeedbacks = countPositiveFeedbackPercentage();


 return (
  
    <div
      style={{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        color: '#010101'
      }}
    >
    <Section title="Please leave feedback">
          <FeedbackOptions  onLeaveFeedback={handleIncrement} options={['good', 'neutral', 'bad']}/>
    </Section>
    <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positiveFeedbacks={positiveFeedbacks}/>
    </Section>   

    </div>
  );



 
};
export default App;