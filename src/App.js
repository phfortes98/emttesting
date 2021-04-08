import logo from './logo.svg';
import './App.css';
import UncontrolledDiagram from './components/Diagram';
import Form from './components/Form'
import 'beautiful-react-diagrams/styles.css';
import React, { useEffect } from 'react';



function App() {
  const [sentence,setSentence]=React.useState("");

 const  submitHandler=(value)=>{
  setSentence(value);
 }
  return (
    <div className="App">
      <Form submitHandler={submitHandler} />
      {sentence && <UncontrolledDiagram sentence={sentence}/>}
    </div>
  );
}

export var savesentence =()=>{
  let sentence = document.getElementById('inputSentence').value;
  alert('Sentence has been saved');
  console.log("sentence saved");
  var words=sentence.split(" ");
}

export default App;
