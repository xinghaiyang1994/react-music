import React from 'react'
import { connect } from 'react-redux'

import SideShare from './SideShare'

class HeaderPlay extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isShare: false
        }
    }
    back = () => {
        this.props.history.go(-1)
    }
    openShare = () => {
        this.setState({
            isShare: true
        })
    }
    closeShare = () => {
        this.setState({
            isShare: false
        })
    }
    render () {
        return (
            <header>
                <i className="icon icon-back" onClick={this.back}></i>
                <div className="song-info">
                    <h2 className="song-title">{this.props.title}</h2>
                    <p className="song-author">{this.props.author}</p>
                </div>
                <i className="icon icon-share" onClick={this.openShare}></i>
                <SideShare isShare={this.state.isShare} onCloseShare={this.closeShare} />
            </header>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    title: state.curSong.title,
    author: state.curSong.author
})

export default connect(mapStateToProps)(HeaderPlay)