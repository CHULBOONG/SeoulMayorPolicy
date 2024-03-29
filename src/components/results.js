import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  votesOneInPercent() {
    if (this.store.getState().one) {
      return (this.store.getState().one / (this.store.getState().one + this.store.getState().two)) * 100
    } else {
      return 0
    }
  }

  votesTwoInPercent() {
    if (this.store.getState().two) {
      return (this.store.getState().two / (this.store.getState().one + this.store.getState().two)) * 100
    } else {
      return 0
    }
  }

  // votesThreeInPercent() {
  //   if (this.store.getState().three) {
  //     return (this.store.getState().three / (this.store.getState().one + this.store.getState().two + this.store.getState().three)) * 100
  //   } else {
  //     return 0
  //   }
  // }

  votesOneInPercentStyle() {
    return {
      width: this.votesOneInPercent()+'%'
    }
  }

  votesTwoInPercentStyle() {
    return {
      width: this.votesTwoInPercent()+'%'
    }
  }

  // votesThreeInPercentStyle() {
  //   return {
  //     width: this.votesThreeInPercent()+'%'
  //   }
  // }

  render() {
    return (
      <div className="results-wrapper">
        <span className="label">박영선: {this.votesOneInPercent().toFixed(2) + '%'}</span>
        <div className="progress">
          <div className="progress-bar park-color" style={this.votesOneInPercentStyle()}></div>
        </div>
        <span className="label">오세훈: {this.votesTwoInPercent().toFixed(2) + '%'}</span>
        <div className="progress">
          <div className="progress-bar oh-color" style={this.votesTwoInPercentStyle()}></div>
        </div>
        {/* <span className="label">박원순: {this.votesThreeInPercent().toFixed(2) + '%'}</span>
        <div className="progress">
          <div className="progress-bar park2-color" style={this.votesThreeInPercentStyle()}></div>
        </div> */}
      </div>
    )
  }
}

export default Results;