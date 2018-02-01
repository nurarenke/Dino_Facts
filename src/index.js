import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
} from 'react-router-dom'


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

class Layout extends React.Component {
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

ReactDOM.render(
  <Router>
    <Route path="/" component={Layout}>
    </Route>
  </Router>,
document.getElementById('root'));
// ========================================

function findNewFact(dinoFacts){
    return dinoFacts[Math.floor(Math.random()*dinoFacts.length)];
}
