import * as React from 'react';


function FormattedDate(props){
    return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

function ActionLink(props){

    function handleCick(e){
        e.preventDefault();
        alert(props.msg);
    }
    
    return(<button href="" onClick={handleCick}> {props.text}</button>);
}


class Clock extends React.Component{
    
    constructor(props){
        super(props);

        this.state ={
            date: new Date()
        }
    }

    //lifecycle methods
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return <div>
            <h1>Time</h1>
        <FormattedDate date={this.state.date}/>
        <ActionLink text={"Click me now"} msg={"You've clicked me"}/>
        </div>
    }
}

export default Clock;