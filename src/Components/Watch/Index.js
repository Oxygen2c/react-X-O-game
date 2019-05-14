import React from "react";

const dataObj = new Date()
const time = dataObj.toLocaleTimeString()
const date = dataObj.toDateString()


export class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        time: time,
        date: date,
    }

    this.updateTime = this.updateTime2.bind(this);
  }
  
  updateTime2() {
    const newTime = new Date().toLocaleTimeString();
    this.setState({ time: newTime });
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.updateTime2();
    }, 500);
  }
  componentWillMount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div className="watch">
        <div>
            <p>{`Дата: ${this.state.date}`}</p>
            <p>{`Время: ${this.state.time}`}</p>
        </div>
      </div>
    );
  }
}
