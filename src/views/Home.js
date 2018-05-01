import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import HeaderHome from '../components/HeaderHome'
import MusicHome from '../components/MusicHome'
import GroupHome from '../components/GroupHome'
import SongHome from '../components/SongHome'
import FooterHome from '../components/FooterHome'

class Home extends React.Component {
    render () {
        return (
            <div className="home-wrap">
                <div className="home">
                    <div className="main">
                        <HeaderHome url={this.props.match.url} />
                        <section className="middle">
                            <Route exact path="/home" render={() => (
                                <Redirect to="/home/music"/>
                            )} />
                            <Route path={`${this.props.match.url}/music`} component={MusicHome} />
                            <Route path={`${this.props.match.url}/song`} component={SongHome} />
                            <Route path={`${this.props.match.url}/group`} component={GroupHome} />
                        </section>
                        <FooterHome />
                    </div>	
                </div>
                {/* <song-list className="song-list" v-bind:isList="isList"></song-list> */}
            </div>
        )
    }
}

export default Home