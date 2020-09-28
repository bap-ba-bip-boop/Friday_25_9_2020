import React from 'react';

export default class InputPart extends React.Component{
    constructor(props){
        super(props);

    }
    messageSubmitted = e =>{
        e.preventDefault();
        console.log("message submitted");

        const input = e.target.elements.message.value;
        input && this.props.encrypt(input);
        e.target.elements.message.value = "";
    }
    render(){
        return(
            <div>
                <h3>{this.props.message}:</h3>
                <form onSubmit={this.messageSubmitted}>
                    <input type ="text" name = "message"/>
                    <button>Encrypt Message</button>
                </form>
            </div>
        );
    }
}