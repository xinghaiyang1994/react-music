import React from 'react'

import HeaderPlay from '../components/HeaderPlay'
import MiddleLrc from '../components/MiddleLrc'
import MiddleRound from '../components/MiddleRound'
import FooterSong from '../components/FooterSong'

class Play extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isRound: false  
        }
    }
    render () {
        return (
            <div className="main-play">
                <div className="play">
                    <HeaderPlay history={this.props.history} />
                    <div className="section" onClick={() => {
                        this.setState({
                            isRound: !this.state.isRound
                        })
                    }}>
                        <div className={this.state.isRound ? 'play-middle' : 'play-middle play-middle-hidden'}><MiddleRound /></div>
                        <div className={!this.state.isRound ? 'play-middle' : 'play-middle play-middle-hidden'}><MiddleLrc /></div>
                    </div>
                    <FooterSong />
                </div>
            </div>
        )
    }
}

export default Play