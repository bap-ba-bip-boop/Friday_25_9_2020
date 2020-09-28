import React from 'react';

export default class ShiftPanel extends React.Component{
    constructor(props){
        super(props);
    }
    
    increment = () =>{this.props.handleIncrement()}
    decrement = () =>{this.props.handleDecrement()}
    reset = () =>{this.props.handleReset()}

    render(){
        return(
            <div>
                <p>Shift: {this.props.shift}</p>
                <button onClick = {this.increment}>+</button>
                <button onClick = {this.decrement}>-</button>
                <button onClick = {this.reset}>0</button>
            </div>
            );
    }
}