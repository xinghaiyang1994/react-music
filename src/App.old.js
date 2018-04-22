import React, { Component } from 'react';
import './App.css';

import { getSearch, getSong } from './api'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            input: '',
            arr: [],
            audioSrc: ''
        }
    }
    getsome = () => {
        getSearch({
            keyword: this.state.input
        }).then((res) => {
            console.log(res)
            this.setState({
                arr: res.data.info
            })
        })
    }
    chgInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    getSong = (item) => {
        getSong({
            hash: item.hash
        }).then((res) => {
            console.log(res)
            this.setState({
                audioSrc: res.data.play_url
            })
        })
    }
    render() {
        return (
        <div className="App">
        <audio src={this.state.audioSrc} controls></audio>
            <header className="App-header">
                <input type="text" value={this.state.input} onChange={this.chgInput}/>
                <button onClick={this.getsome}>点击</button>
            </header>
            <div>
                {
                    this.state.arr.map((el, i) => {
                        return (
                            <div key={i} onClick={() => this.getSong(el)}>{el.songname}</div>
                        )
                    })
                }
            </div>
        </div>
        )
    }
}

export default App;
