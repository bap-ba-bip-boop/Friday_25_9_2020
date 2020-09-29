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
        let encryptedMessage = "";
        const encryptedCharacter = (letter, mapNum) => {
            return String.fromCharCode((((letter.charCodeAt(0) - mapNum + this.state.shift) % 26) + mapNum));
        };

        for(let letter of message)
            encryptedMessage += (/[A-Z]/.test(letter)) ? encryptedCharacter(letter, 65) : (/[a-z]/.test(letter)) ? encryptedCharacter(letter, 97) : letter;
        this.setState( () => this.state.messageTemp = encryptedMessage);
    }
    handleIncrement(){
        this.setState( prevState => ({shift: (prevState.shift == 25) ? 0 : prevState.shift + 1 }));
    }
    handleDecrement(){
        this.setState( prevState => ({shift: (prevState.shift == 0) ? 25 : prevState.shift - 1 }));
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
