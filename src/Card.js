import React, { Component } from 'react'

export default class Card extends Component {
    state={index: " ", correctValue: " ", WinStreak: 0, Losestreak: 0 }

    componentDidMount(){
        this.props.calculate(this.state.props);
    }
    winOrLoseCheck= () =>{
        const str = this.state.correctValue;
        if(!str.search("Correct")){
            this.setState({ WinStreak: this.state.WinStreak+1})
        } else {
            this.setState({Losestreak: this.state.Losestreak+1})
        }
    }

    handlesubmit = e =>{
        e.preventDefault();
        this.setState({...this.state,correctValue: this.props.calculate(this.state.index)});
        this.winOrLoseCheck();
        console.log(this.state)
    }
    handleInputChange = e =>{
        this.setState({
            index: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.correctValue}</h1>
                <form onSubmit={this.handlesubmit}>
                    <div class="ui input">
                        <input onChange={this.handleInputChange} value={this.state.index} type="number" placeholder="Enter Index"/>
                    </div>
                </form>
                <div className="ui content">
                    <div className="ui item">Win streak {this.state.WinStreak}</div>
                    <div className="ui item">Lose streak {this.state.Losestreak}</div>
                </div>
            </div>  
        )
    }
}
