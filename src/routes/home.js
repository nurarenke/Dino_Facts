import React from 'react';
import dinoFacts from './dinofacts'

/* Button component that displays a button and calls the onclick function */
function Button(props){
    return (
        <button 
            className="randomFactButton btn btn-primary button" 
            onClick={props.onClick}>
            {props.btnText}
        </button>
    );
}


/* Result component displays the dino fact */
const Result = (props) => {
    return (
        <div className="dinotext">{props.dinoFact}</div>
    );
};

/* Home copoment which renders Result and Button */
export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            btnText: "Learn a New Fact",
            /* If you type in a fact id in the URL it will display otherwise it will display the text */
            currentDinoFact: this.props.match.params.id < dinoFacts.length ? dinoFacts[this.props.match.params.id] : "404",
        }
    };
    //TODO - check if params are correct or load not found
    componentWillMount(){
        if (window.location.href === "/") {
            this.setState({currentDinoFact:"Let's Learn about dinos"});
        };
    };

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
// Helper Functions
// ========================================

/* Random number generated for the dino facts array */
function findNewFactIndex(dinoFacts){
    let result = Math.floor(Math.random()*dinoFacts.length)
        if (result === 0) {
            return 1
        };
    return result
}