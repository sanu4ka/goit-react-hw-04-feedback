import { Component } from 'react';
import css from './App.module.css';
import Statictics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = array => {
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback(Object.values(this.state));
    const { good } = this.state;

    return Math.round((good / total) * 100) || 0;
  };

  render() {
    let options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback(Object.values(this.state));
    let positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.mainModule}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
