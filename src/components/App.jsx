import css from './App.module.css';
import Statictics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const feedbacks = { good, neutral, bad };
  const options = Object.keys(feedbacks);

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(good + 1);
      return;
    }
    if (option === 'bad') {
      setBad(bad + 1);
      return;
    }
    setNeutral(neutral + 1);
    return;
  };

  const countTotalFeedback = array => {
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100) || 0;
  };

  const total = countTotalFeedback(Object.values(feedbacks));

  return (
    <div className={css.mainModule}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
