import React from 'react'
import { connect } from 'react-redux'

import dImg from '../assets/img/default.jpg'
import { tabSong } from '../actions'


class MiddleSong extends React.Component {
    tabSong = (item) => {
        this.props.dispatch(tabSong(item))
    }
    render () {
        return (
            <section>
                <div className="mysong-top">
                    <div className="mysong-top-left">
                        <img src={dImg} alt=""/>
                        <span className="music-list-left-bg"></span>
                        <em className="music-list-heart"></em>
                    </div>
                    <div className="mysong-top-right">
                        <h3>我喜欢的音乐</h3>
                        <div className="mysong-top-user">
                            <img src={dImg} alt=""/>
                            <h3>海风闲闲的</h3>
                        </div>
                    </div>
                </div>
                <div className="mysong-main">
                    <div className="main-header" onClick={() => { this.tabSong(this.props.songList[0]) }}>
                        <i className="icon icon-mysong-start"></i>
                        <h3>播放全部<span>(共{this.props.songList.length}首)</span></h3>
                    </div>
                    <ul className="mysong-alls">
                        {
                            this.props.songList.map((el, index) => {
                                return (
                                <li className="mysong-list" key={index} onClick={() => { this.tabSong(el) }}>
                                    {el.hash === this.props.curSong.hash ? (<i className="icon icon-mysong-cur"></i>) : (<span className="mysong-list-num" v-show="item.id != curSong.id">{index + 1}</span>)}
                                    <div className="mysong-list-right">
                                        <h3 className="song-list-title">{el.title}</h3>
                                        <div className="song-list-bottom">
                                            <span className="song-list-sq">SQ</span>
                                            <p className="song-list-author">
                                            {el.author} - {el.album}
                                            </p>
                                        </div>
                                    </div>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    songList: state.songList,
    curSong: state.curSong
})

export default connect(mapStateToProps)(MiddleSong)