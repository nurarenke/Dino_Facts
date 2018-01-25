import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state={btnText: "Click to get started"}
    }

    handleClick = () => {
        this.setState({
            btnText: "New Fact"
        })

    };
    render() {
        return (
            <button className="randomFactButton" onClick={this.handleClick}>
            {this.state.btnText}
            </button>
        );
    }
    
}




// ========================================

ReactDOM.render(
  <Button />,
  document.getElementById('root')
);