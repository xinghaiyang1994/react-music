import React from 'react'
import { connect } from 'react-redux'

import dImg from '../assets/img/default.jpg'

class MusicHome extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isHomeList: true
        }
    }
    chgShow = () => {
        this.setState({
            isHomeList: !this.state.isHomeList
        })
    }
    toSong = () => {
        this.props.history.push('/song')
    }
    render () {
        return (
            <div className="music-home">
                <div className="music-main">
                    <div className="music-header" onClick={this.chgShow}>
                        <div className="header-left">
                            <em className={this.state.isHomeList ? 'arrow' : 'arrow arrow-close'}></em>
                        </div>
                        <h2>创建的歌单</h2>
                    </div>
                    <ul v-show="isHomeList" className="music-alls" style={{display:this.state.isHomeList ? 'block' : 'none'}}>
                        <li className="music-list" onClick={this.toSong}>
                            <div className="music-list-left">
                                <img src={dImg} alt=""/>
                                <span className="music-list-left-bg"></span>
                                <em className="music-list-heart"></em>
                            </div>
                            <div className="music-list-middle">
                                <div className="music-list-info">
                                    <h3>我喜欢的音乐</h3>
                                    <p>{this.props.songList.length}首</p>
                                </div>
                                <i className="icon icon-home-volume"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    songList: state.songList
})

export default connect(mapStateToProps)(MusicHome)