import React,{Component} from 'react';
import {render} from 'react-dom';
import dotnetify from 'dotnetify';


export default class HelloWorld extends Component {
    constructor(props) {
        super(props);

        dotnetify.react.connect("HelloWorld", this);
        this.state = { Greetings: "", ServerTime: "" };
    }

    render() {
        return (
            <div>
                {this.state.Greetings}<br />
                Server time is: {this.state.ServerTime}
            </div>
        );
    }
}
