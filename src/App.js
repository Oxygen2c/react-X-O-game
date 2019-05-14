import React from "react";
import { Game } from "./Components/Game/Index";
import { GoulBlock } from "./Components/GoulBlock/Index";
import "./App.css";
import { Watch } from "./Components/Watch/Index";
import { Timer } from "./Components/Timer/Index";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showDate: true,
      message: ["message-1", "message-2"],
      logged:false
    }
    this.showDateHandler = this.showDateHandler.bind(this)
    this.loggedhandler = this.loggedhandler.bind(this)
  }

  showDateHandler() {
    this.setState({ showDate: !this.state.showDate })
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        return { loading: false }
      })
    }, 3000);
  }

  loggedhandler() {
    this.setState(prevState => {
      return {logged: !this.state.logged}
    })
  }

  render() {
    const loggedText = this.state.logged ? 'log out' : 'log in'
    return (
      <div className="App">
        {this.state.loading ? ( //condition rendering
          <p style={{ fontSize: 40 }}>Is loading...</p>
        ) : (
          <GoulBlock />
        )}
        <button onClick={this.showDateHandler}>
          Click to Show or hide Date
        </button>
        {this.state.showDate ? <Watch /> : ""}
        <Timer />
        {/* <Game /> */}

        <div className = "message-block" style = {{border:'1px solid #000',padding:10,borderRadius:10,marginTop:10,maxWidth:200}}>
          {this.state.message.length > 0 &&
            `you have ${this.state.message.length} messages`}
        </div>
        
        <div className="log-info">
        
            <button onClick = {this.loggedhandler}>{loggedText}</button>
            <p>you are logged {this.state.logged ? 'in' : 'out'}</p>
        </div>

      </div>
    );
  }
}
