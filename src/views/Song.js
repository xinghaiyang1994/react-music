import React from 'react'

import FooterHome from '../components/FooterHome'
import MiddleSong from '../components/MiddleSong'
import HeaderSong from '../components/HeaderSong'

class Song extends React.Component {
    render () {
        return (
            <div className="body-song">
                <div className="home">
                    <div className="main">
                        <HeaderSong history={this.props.history} />
                        <MiddleSong history={this.props.history} />
                        <FooterHome />
                    </div>
                </div>
            </div>
        )
    }
}

export default Song