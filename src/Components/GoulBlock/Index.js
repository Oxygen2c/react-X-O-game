import React from "react";
import { Goul } from "../Goul/Index";
import goulData from "../../goulData";

export class GoulBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goulData: goulData,
      value: 1
    };
    this.addGoul = this.addGoul.bind(this);
    this.fnc = this.fnc.bind(this);
  }
  addGoul = () => {
    let newItem = {
      id: 7,
      title: "Задача",
      number: 7,
      text: "Тут писание",
      complite: false
    };
    // const oldState = {...this.state}
    this.setState({
      goulData: [...this.state.goulData, newItem]
    });
    // this.setState(({ goulData }) => {
    //   return {
    //     goulData: [
    //       ...goulData,
    //       {
    //         id: 7,
    //         title: "Задача",
    //         number: 7,
    //         text: "Тут писание",
    //         complite: false
    //       }
    //     ]
    //   };
    // });
  };

  fnc = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1
      };
    });
  };
  handleChange = (id) => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1
      };
    });
  };

  render() {
    // let $goulData = this.state.goulData

    const goulCopmonents = this.state.goulData.map(elem => {
      return <Goul key={elem.id} goulData={elem} onChange = {this.handleChange}/>;
    });

    // Фильтруются принимаемые данные (пропсы для Block),на выходе Block только с
    // complite:true
    const goulDataFiltered = this.state.goulData.filter(elem => {
      return elem.complite == true;
    });

    // создание отфильтрованных компоненов <Block />
    const goulCopmonentsFiltered = goulDataFiltered.map(elem => {
      return <Goul key={elem.id} goulData={elem} />;
    });

    return (
      <div>
        <button onClick={this.fnc}>Inc count</button>
        {this.state.value}
        <div className="not-filtered">
          <h1>Not filtered, rendered with map()</h1>
          <h1>You are logged {this.state.isLogged ? "in" : "out"}</h1>
          <button onClick={this.addGoul}>Add goul</button>
          {goulCopmonents}
        </div>

        <div className="filtered">
          <h1>Filtered, rendered with map()</h1>
          {goulCopmonentsFiltered}
        </div>
      </div>
    );
  }
}
