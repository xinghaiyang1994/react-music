import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'

import './assets/js/rem'
import Home from './views/Home'
import Play from './views/Play'
import Search from './views/Search'
import Song from './views/Song'
import AudioPlay from './containers/AudioPlay'

class App extends Component {
    render() {
        return (
            <Router>  
                <div className="root-main">
                    <AudioPlay />
                    <Route exact path="/" render={() => (
                         <Redirect to="/home"/>
                    )} />
                    <Route path="/home" component={Home} />
                    <Route path="/song" component={Song} />
                    <Route path="/search" component={Search} />
                    <Route path="/play" component={Play} />
                </div>
            </Router> 
        )
    }
}

export default App;
