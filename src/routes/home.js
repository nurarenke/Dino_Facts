import React from 'react';


function Button(props){

    return (
        <button className="randomFactButton btn btn-primary button" onClick={props.onClick}>
        {props.btnText}
        </button>
    );
    
} 

const dinoFacts = ["Dinosaurs are a group of reptiles that have lived on Earth for about 245 million years.",
"At present over 700 different species of dinosaurs have been identified and named."]

const Result = (props) => {
    return (
        <div className="dinotext">{props.dinoFact}</div>
    );
};


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            btnText: "Learn a New Fact",
            currentDinoFact: this.props.match.params.id ? dinoFacts[this.props.match.params.id] : "Let's learn about dinos",
        }
    }

    onNewFactClicked = () => {
        let newDinoFact = findNewFact(dinoFacts)

        this.setState((prevState) => ({
            currentDinoFact: newDinoFact
        }));
    };

    render() {
        return(
            <div>
                <Result dinoFact={this.state.currentDinoFact} />
                <Button onClick={this.onNewFactClicked} btnText={this.state.btnText} />
            </div>
        );
    }
}
// ========================================

function findNewFact(dinoFacts){
      return dinoFacts[Math.floor(Math.random()*dinoFacts.length)]
}