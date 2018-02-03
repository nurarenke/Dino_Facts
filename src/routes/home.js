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
    console.log(props.match)
    return (
        <div className="dinotext">{props.dinoFact}</div>
    );
};


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            btnText: "Learn a New Fact",
            currentDinoFact: "Let's learn about dinos!",
        }
    }

    onNewFactClicked = () => {
        let currentDinoFact = findNewFact(dinoFacts)

        this.setState((prevState) => ({
            dinoFact: currentDinoFact
        }));
    };

    render() {
        return(
            <div>
                <Result dinoFact={this.state.dinoFact} match={this.props.match.params.id}/>
                <Button onClick={this.onNewFactClicked} btnText={this.state.btnText} />
            </div>
        );
    }
}
// ========================================

function findNewFact(dinoFacts){
      return dinoFacts[Math.floor(Math.random()*dinoFacts.length)]
}