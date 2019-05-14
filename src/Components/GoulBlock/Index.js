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
    this.IncCount = this.IncCount.bind(this);
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
  };

  IncCount = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1
      };
    });
  };
  handleChange = id => {
    this.setState(prevState => {
      const newGoulData = prevState.goulData.map(elem => {
        if (elem.id == id) {
          elem.complite = !elem.complite;
        }
        return elem;
      });
      return {
        goulData: newGoulData
      };
    });
  };

  render() {
   
    const goulCopmonents = this.state.goulData.map(elem => {
      return (
        <Goul key={elem.id} goulData={elem} onChange={this.handleChange} />
      );
    });

    const goulDataFiltered = this.state.goulData.filter(elem => {     // Фильтруются принимаемые данные (пропсы для Block),на выходе Block только с complite:true
      return elem.complite == true;
    });
    
    const goulCopmonentsFiltered = goulDataFiltered.map(elem => {     // создание отфильтрованных компоненов <Block />
      return (
        <Goul key={elem.id} goulData={elem} onChange={this.handleChange} />
      );
    });

      return (
        
          <div>
            <div className = "counter">
              <button onClick={this.IncCount}>Inc count</button>
              {this.state.value}
            </div>
  
            <div className="not-filtered">
              <h1>Not complited goals</h1>                          { /* Not filtered, rendered with map */}
              <button onClick={this.addGoul}>Add goul</button>
              {goulCopmonents}
            </div>
  
            <div className="filtered">
              <h1>Complited goals</h1>
              {goulCopmonentsFiltered}                              {/* Filtered, rendered with map */}
            </div>
          </div> 

      );
    
  }
}
