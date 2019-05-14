import React from "react";

export class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        timer:[
            {minute: 0},
            {sec: 0},
            {milisec: 60}
        ]
    }
  }
  updateSec() {

    this.setState((prevState => {
        let state2 = prevState.timer.map((elem) => {
            if(elem.milisec > 60) {
                elem.sec = elem.sec + 1
            }
            return elem
        })
        return {
            timer: state2
        }
    }))
      
  }
  
  componentDidMount() {
     this.timerId = setInterval(() => {
         this.updateSec()
     }, 100);
  }

  componentWillMount() {
      clearInterval(this.timerId)
    }

  render() {
    // let value = this.state.value;
    return (
      <div>
        <h1>Timer</h1>
        <span>{this.state.timer[0].minute} : </span>
        <span>{this.state.timer[1].sec} : </span>
        <span>{this.state.timer[2].milisec} </span>
        <span />
      </div>
    );
  }
}
