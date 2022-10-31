import Statistics from "components//Statistics.js";
import FeedbackOptions from 'components/FeedbackOptions.js';
import Section from 'components/Section.js';
import Notification from 'components/Notification.js';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  setNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  setBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total > 0) {
      return Math.round((this.state.good * 100) / total);
    } else {
      return 0;
    }
  };

  render() {
    return (
      <div className="feedbackComponents">
        <Section title="Please leave feedback">
          <FeedbackOptions
            setGood={this.setGood}
            setNeutral={this.setNeutral}
            setBad={this.setBad}
          />
        </Section>
        <Section title="Statistics">
          {this.countPositiveFeedbackPercentage()>= 1 ? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> : <Notification
            message="There is no feedback" />
          }
        </Section>
      </div>
    );
  }
}
