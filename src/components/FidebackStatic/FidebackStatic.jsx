import React, { useState } from 'react';
import css from './FidebackStatic.module.css';
import Statistics from './Statistics';
import FeedbackOption from './FeedbackOption';
import Section from 'components/Section';
import Notification from 'components/Notification';


const FidebackStatic = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handelClick = e => {
    const name = e.target.name;

    switch (name) { 
      case 'good':
        setGood(prevState => prevState + 1);
        break;

         case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
         case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default: return
    }
  };

    const countTotalFeedback = () => good + neutral + bad;

     const countPositiveFeedbackPercentage = () =>
    (good * 100) /countTotalFeedback();



  return (
  <div className = {css.container}>
        <Section title="Please leave feedback">
          <FeedbackOption           
            onLeaveFeedback={handelClick}
          />
        </Section>
        {countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
  )
}

export default FidebackStatic


