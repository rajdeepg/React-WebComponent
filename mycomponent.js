import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';

class MyCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState(prev => ({
            count: prev.count + 1
        }));
    }

    decrement() {
        this.setState(prev => ({
            count: prev.count - 1
        }));
    }

    render() {
        return <div>
            <h1>React Counter</h1>
            <button onClick={() => this.increment()}>Up</button>
            <button onClick={() => this.decrement()}>Down</button>
            <span>{this.state.count}</span>
        </div>
    }
}

customElements.define('my-counter', reactToWebComponent(MyCounter, React, ReactDOM))
//ReactDOM.render(<MyCounter />, document.getElementById("app"));
