import React from 'react';
import InputPart from './code_files/inputPart';
import OutputPart from './code_files/outputPart';
import ShiftPanel from './code_files/shiftPanel';

export default class Panel extends React.Component{
    constructor(props){
        super(props);
        this.encryptMessage = this.encryptMessage.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            messageTemp: "",
            shift: 0
        }
    }
    encryptMessage(message){
        const encryptedCharacter = (letter, mapNum, shift) => {
            return String.fromCharCode((((letter.charCodeAt(0) - mapNum + shift) % 26) + mapNum));
        };
        let encryptedMessage = "", tempShift = (this.state.shift < 0) ? 26 - this.state.shift : this.state.shift;

        for(let letter of message)
            encryptedMessage += (/[A-Z]/.test(letter)) ? encryptedCharacter(letter, 65, tempShift) : (/[a-z]/.test(letter)) ? encryptedCharacter(letter, 97, tempShift) : letter;

        this.setState( () => this.state.messageTemp = encryptedMessage);
    }
    handleIncrement(){
        this.setState( prevState => ({shift: prevState.shift + 1 }));
    }
    handleDecrement(){
        this.setState( prevState => ({shift: prevState.shift - 1 }));
    }
    handleReset(){
        this.setState({shift: 0 });
    }
    render = () =>(
        <div>
            <InputPart message = {`Enter Message Here`} encrypt = {this.encryptMessage}/>
            <ShiftPanel
                shift = {this.state.shift}
                handleIncrement = {this.handleIncrement}
                handleDecrement = {this.handleDecrement}
                handleReset = {this.handleReset}
                />
            <OutputPart message = {`Encrypted Message`} encrypted = {this.state.messageTemp}/>
        </div>
    );
};