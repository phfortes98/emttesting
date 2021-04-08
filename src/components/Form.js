import React from 'react';
import UncontrolledDiagram from'./Diagram'

class Form extends React.Component{
    state={
        value: ''
    };
    saveSentence=(event)=>{
       // let sentence=event.target.value;
        //console.log('Event: ', event.target.value);

        this.setState({ value: event.target.value});
    }
    handleSubmit=(event)=>{

        event.preventDefault();
        const sentencestring=this.state.value;
      //  console.log('sentence has been saved: ' , sentencestring);
        this.props.submitHandler(sentencestring);

    }

    render(){
        return(
        <form>
            <label>Entre a frase: </label>
            <input type="text" onChange={this.saveSentence}/>
            <button type='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
        );
    }
}

export default Form;