import React from 'react'
import { connect } from 'react-redux'   

import { updateTime, chooseSong } from '../actions'

class AudioPlay extends React.Component {
    componentDidUpdate(){
        let audio = document.getElementById('audio')
        this.props.isStart ? audio.play() : audio.pause()
    }
    render () {
        return (
            <div>
                <audio loop src={this.props.url} id="audio" autoPlay controls></audio>
            </div>
        )
    }
    componentDidMount () {
        let that = this
        let audio = document.getElementById('audio')
        this.props.isStart ? audio.play() : audio.pause()
        audio.addEventListener('timeupdate',function(){
            let curTime = parseInt(this.currentTime * 100, 10)
            let allTime = parseInt(this.duration * 100, 10)
            that.props.dispatch(updateTime({ curTime, allTime }))

            if (parseInt(this.currentTime, 10) === parseInt(this.duration, 10) && this.duration !== 0) {
                that.props.dispatch(chooseSong({
                    songList: that.props.songList,
                    mode: that.props.mode,
                    curSong: that.props.curSong,
                    direction: 'next'
                }))
                // console.log('切割')
            }
        },false)
    }
}

const mapStateToProps = (state, ownProps) => ({
    curSong: state.curSong,   
    url: state.curSong.url,   
    isStart: state.curConfig.isStart,
    mode: state.curConfig.mode,
    songList: state.songList
})

export default connect(mapStateToProps)(AudioPlay)