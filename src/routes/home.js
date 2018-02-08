import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function Button(props){
    return (
        <button 
            className="randomFactButton btn btn-primary button" 
            onClick={props.onClick}>
            {props.btnText}
        </button>
    );
}

const dinoFacts = ["Dinosaurs are a group of reptiles that have lived on Earth for about 245 million years.",
"At present over 700 different species of dinosaurs have been identified and named.", 
"The word dinosaur comes from the Greek language and means ‘terrible lizard’. The word was coined by English paleontologist Richard Owen in 1842 and was meant to refer to Dinosaurs impressive size rather than their scary appearance."]

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
        let newDinoFactIndex = findNewFactIndex(dinoFacts)

        this.setState((prevState) => ({
            currentDinoFact: dinoFacts[newDinoFactIndex]
        }));

        this.props.history.push('/fact/' + newDinoFactIndex);

    };

    render() {
        return(
            <div>
                <Result dinoFact={this.state.currentDinoFact} />
                <Button onClick={this.onNewFactClicked} btnText={this.state.btnText} factIndex={this.state.factIndex}/>
            </div>
        );
    }
}
// ========================================

function findNewFactIndex(dinoFacts){
      return Math.floor(Math.random()*dinoFacts.length)
}