import React from "react";

export class Goul extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div
          className="block"
          style={{
            fontSize: 15,
            backgroundColor: this.props.goulData.complite ? "green" : ""
          }}
        >
          <h2 style={{ color: this.props.goulData.text ? "red" : "blue" }}>
            {this.props.goulData.title} {this.props.goulData.number}
          </h2>
          <p>{this.props.goulData.text}</p>
          <input
            type="checkbox"
            defaultChecked={this.props.goulData.complite}
            onChange={() => {
              this.props.onChange(this.props.goulData.id);
            }}
          />
        </div>
      </div>
    );
  }
}
