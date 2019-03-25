import * as React from 'react';

class Toggler extends React.Component{

    constructor(props){
        super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {isToggleOn: true};

    }

    handleClick(){
        this.setState({isToggleOn: !this.state.isToggleOn});
    }
    
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        );
    }
    
}

export default Toggler;