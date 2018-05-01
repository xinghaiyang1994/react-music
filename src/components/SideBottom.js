import React from 'react'
import { connect } from 'react-redux'

import { tabSong, delSong, changeMode } from '../actions'

class SideBottom extends React.Component {
    closeBottom = () => {
        this.props.onCloseBottom()
    }
    delSong = (item) => {
        this.props.dispatch(delSong(item))
    }
    tabSong = (item) => {
        this.props.dispatch(tabSong(item))
    }
    changeMode = () => {
        this.props.dispatch(changeMode())
    }
    render () {
        let modeClass
        let modeTxt 
        switch (this.props.mode) {
            case 'loop':
                modeClass = 'icon-modelist-loop'
                modeTxt = '列表循环'
                break
            case 'random':
                modeClass = 'icon-modelist-random'
                modeTxt = '随机播放'
                break
            case 'one':
                modeClass = 'icon-modelist-one'
                modeTxt = '单曲循环'
                break
            default:
                modeClass = '' 
                modeTxt = ''
        }
        return (
            <div className={this.props.bottomShow ? 'side-bottom side-bottom-open' : 'side-bottom'}>
                <div className="side-bottom-main">
                    <div className="side-bottom-header">
                        <div className="side-bottom-header-left">
                            <i className={modeClass + ' icon-modelist icon'} onClick={this.changeMode}></i>
                            <span>{modeTxt}({this.props.songList.length})</span>
                        </div>
                    </div>
                    <div className="main-song">
                        <ul className="songList-wrap">
                        {
                            this.props.songList.map((el, index) => {
                                return (
                                    <li key={index} className={el.hash === this.props.curSong.hash ? 'songList-list songList-list-cur' : 'songList-list'}>
                                        <div className="songList-list-info" onClick={() => { this.tabSong(el) }}>
                                            <i className="icon icon-voice-cur"></i>
                                            <h4>{el.title}</h4>
                                            <p>-&nbsp;{el.author}</p>
                                        </div>
                                        { el.hash !== this.props.curSong.hash && (<i className="icon icon-del" onClick={() => { this.delSong(el) }}></i>)}
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
                <div className="main-list-close" onClick={this.closeBottom}></div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    songList: state.songList,
    curSong: state.curSong,
    mode: state.curConfig.mode
})

export default connect(mapStateToProps)(SideBottom)