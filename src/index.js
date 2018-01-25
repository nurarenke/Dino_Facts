import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(props){

    return (
        <button className="randomFactButton" onClick={props.onClick}>
        {props.btnText}
        </button>
    );
    
} 

const dinoFacts = ["Dinosaurs are a group of reptiles that have lived on Earth for about 245 million years.",
"At present over 700 different species of dinosaurs have been identified and named."]

const Result = (props) => {
    return (
        <div>{props.dinoFact}</div>
    );
};

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            btnText:"Click to get started",
            dinoFact:"Let's learn about dinos!"}
    }
    

    changeBtnText = () => {
        let currentDinoFact = findNewFact(dinoFacts);
        this.setState((prevState) => ({
            btnText: "New Fact",
            dinoFact: currentDinoFact
        }));
    };

    render() {
        
        return(
            <div>
                <Result dinoFact={this.state.dinoFact} />
                <Button onClick={this.changeBtnText} btnText={this.state.btnText} />
            </div>
        );
    }
}


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function findNewFact(dinoFacts){
    return dinoFacts[Math.floor(Math.random()*dinoFacts.length)];
}