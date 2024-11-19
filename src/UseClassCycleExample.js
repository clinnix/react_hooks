import React from "react";

class UseClassCycleExample extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 1
        };
    }

    componentDidMount() {
        console.log('this.state.count: '+this.state.count);
        document.title = `You clicked ${this.state.count} times (first time)`;
        console.log(document.title);
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times2`;
        console.log(document.title);
    }

    render(){
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 2})}>
                    click me
                </button>

            </div>
        );
    }
}

export default UseClassCycleExample;