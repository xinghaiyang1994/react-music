import React from 'react'
import { connect } from 'react-redux'

import { toShowTime, getStyle } from '../utils/util'
import SideBottom from './SideBottom'
import { changepProgress, ctrlStart, changeMode, chooseSong } from '../actions'

class FooterSong extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            bottomShow: false
        }
    }
    openBottom = () => {
        this.setState({
            bottomShow: true
        })
    }
    closeBottom = () => {
        this.setState({
            bottomShow: false
        })
    }
    ctrlStart = () => {
        this.props.dispatch(ctrlStart('toggle'))
    }
    changeMode = () => {
        this.props.dispatch(changeMode())
    }
    ctrlSong = (direction) => {
        this.props.dispatch(chooseSong({
            songList: this.props.songList,
            mode: this.props.mode,
            curSong: this.props.curSong,
            direction
        }))
    }
    render () {
        let modeClass 
        switch (this.props.mode) {
            case 'loop':
                modeClass = 'icon-mode-loop'
                break
            case 'random':
                modeClass = 'icon-mode-random'
                break
            case 'one':
                modeClass = 'icon-mode-one'
                break
            default:
                modeClass = '' 
        }
        return (
            <footer>
                <div className="progress">
                    <span>{toShowTime(this.props.curTime)}</span>
                    <div className="progress-main">
                        <div className="progress-box">
                            <span className="progress-bar" style={{ width: ( this.props.curTime * 100 / this.props.allTime ) + '%'}}></span>
                            <em className="progress-round" style={{ left: ( this.props.curTime * 100 / this.props.allTime ) + '%'}}></em>
                        </div>
                    </div>
                    <span>{toShowTime(this.props.allTime)}</span>
                </div>
                <div className="footer-choose">
                    <i className={ modeClass + ' icon'} onClick={this.changeMode}></i>
                    <span className="icon icon-ctrl-left" onClick={() => { this.ctrlSong('prev') }}></span>
                    <div className="footer-ctrl">
                        <div className={this.props.isStart ? 'ctrl-wrap icon-ctrl-start' : 'ctrl-wrap icon-ctrl-start icon-ctrl-stop'} onClick={this.ctrlStart}>
                            <i className="icon icon-ctrl-start"></i>
                        </div>
                    </div>
                    <span className="icon icon-ctrl-right" onClick={() => { this.ctrlSong('next') }}></span>
                    <i className="icon icon-song-list" onClick={this.openBottom}></i>
                </div>
                <SideBottom bottomShow={this.state.bottomShow} onCloseBottom={this.closeBottom}/>
            </footer>
        )
    }
    componentDidMount () {

        let audio=document.querySelector('#audio')
        let oMain = document.querySelector('.progress-main')
        let oRround = document.querySelector('.progress-round')
		let that=this
        
        //歌曲进度控制	
        let w = parseInt(getStyle(oMain, 'width'))
		oRround.addEventListener('touchstart', (e) => {
			audio.pause();
            let disX = e.touches[0].pageX / w * 100 - parseInt(that.props.curTime) / parseInt(that.props.allTime) * 100;
			function fnMove (e) {
				let l = e.touches[0].pageX / w * 100 - disX
				if(l > 100){
				    l = 100
				}else if(l < 0){
				    l = 0
                }
                that.props.dispatch(changepProgress(l/100))
                that.props.dispatch(ctrlStart(false))
			}
			function fnEnd(e){
				let l = e.changedTouches[0].pageX / w * 100 - disX
				if(l > 100){
					l = 100
				}else if(l < 0){
					l = 0
				}
				that.props.dispatch(changepProgress(l/100))
				that.props.dispatch(ctrlStart(true))
				audio.currentTime = l / 10000 * (that.props.allTime)
				document.removeEventListener('touchmove', fnMove)
				document.removeEventListener('touchend', fnEnd)
			}
			document.addEventListener('touchmove', fnMove)
			document.addEventListener('touchend', fnEnd)
		})

    }
}

const mapStateToProps = (state, ownProps) => ({
    curTime: state.curConfig.curTime,
    allTime: state.curConfig.allTime,
    isStart: state.curConfig.isStart,
    mode: state.curConfig.mode,
    songList: state.songList,
    curSong: state.curSong
})

export default connect(mapStateToProps)(FooterSong)