import React, { Component } from "react";

class Statistics extends Component {
  render() {
    return (
        <div className="statistics_feedback">
          Good: <span></span> {this.props.good}, <br/>
          Neutral: {this.props.neutral}, <br/>
          Bad: {this.props.bad}, <br/>
          Total: {this.props.total}, <br/>
          Positive feedback: {this.props.positivePercentage}%;
        </div>
    );
  }
}
export default Statistics;
