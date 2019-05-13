import React from 'react'

export class Goul extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     changed:false
        // }
    }
    render() {
        return (
            <div>
                {/* <p>{this.state.changed}</p> */}
                <div className="block" style = {{fontSize: 15}}>
                    <h2 style = {{color: this.props.goulData.text ? 'red' : 'blue'}}>{this.props.goulData.title} {this.props.goulData.number}</h2>
                    <p>{this.props.goulData.text}</p>
                    <input type="checkbox" defaultChecked = {this.props.goulData.complite} onChange = {this.props.onChange}/>
                </div>
            </div>
        )
    }
}