import React, { Component } from 'react';
import calculate from "./calculate";
import Card from "./Card";

export default class App extends Component {
    render() {
        return (
            <div style={{marginTop:20}} className="ui container">
                <Card calculate={calculate}/>
            </div>
        )
    }
}
