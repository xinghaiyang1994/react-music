import React from 'react'
import { connect } from 'react-redux'

import { addSong } from '../actions'

class MiddleSearch extends React.Component {
    getSong = (el) => {
        this.props.dispatch(addSong(el.hash))
    }
    render () {
        return (
            <section className="middle">
                <div className="find-nothing" style={{display: (this.props.aSong.length === 0 && this.props.isSearch)? 'block' : 'none'}}>未找到与"{this.props.nTxt}"相关的内容</div>
                <ul className="song-wrap" style={{display: this.props.aSong && this.props.aSong.length ? 'block' : 'none'}}>
                    {
                        this.props.aSong.map((el, i) => {
                            return (
                                <li key={i} className="song-lists">
                                    <div onClick={() => {
                                        this.getSong(el)
                                    }}>
                                        <h3 className="song-list-title">{el.songname}</h3>
                                        <div className="song-list-bottom clearfix">
                                            <span className="song-list-sq fl">SQ</span>
                                            <p className="song-list-author fl clearfix">
                                                <span className="fl">{el.singername}</span>
                                                <span className={el.album_name === '' ? 'song-list-album hideit fl' : 'song-list-album fl' }> - {el.album_name}</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default connect()(MiddleSearch)