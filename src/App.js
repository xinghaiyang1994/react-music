import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './assets/js/rem'
import { getSearch, getSong } from './api'
import Home from './views/Home'
import Play from './views/Play'
import Search from './views/Search'
import Song from './views/Song'



class App extends Component {
    render() {
        return (
            <Router>  
                <div>
                    <audio src="" controls></audio>
                    <div>
                        <Link to="/">首页</Link>
                        <Link to="/mysong">mysong</Link>
                        <Link to="/search">search</Link>
                        <Link to="/play">play</Link>
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route path="/mysong" component={Song} />
                    <Route path="/search" component={Search} />
                    <Route path="/play" component={Play} />
                </div>
            </Router> 
        )
    }
}

export default App;
