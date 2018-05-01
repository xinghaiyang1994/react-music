import React from 'react'
import { connect } from 'react-redux'

import { getStyle } from '../utils/util'
import { changeVolumn } from '../actions'

class MiddleLrc extends React.Component {
    constructor (props) {
        super(props)
        this.data = {
            iNow: -1
        }
    }
    componentDidUpdate () {
        let l = this.props.lrc.length
        let oLrc = document.querySelector('body .lrc-main')
        for(let i = 0 ; i < l; i ++){
            if(this.props.curTime >= this.props.lrc[i].time){
                this.data.iNow = i
            }else{
                break
            }
        }
        if (this.data.iNow !== -1) {
            oLrc.style.transform = 'translateY(-'+(this.data.iNow*60/75)+'rem)'
        }
    }
    render () {
        return (
            <div className="lrc">
                <div className="lrc-volume">
                    <i className="icon icon-volume"></i>
                    <div className="volume-wrap">
                        <span className="volume-bar" style={{width: this.props.curVolume * 100 + '%'}}></span>
                        <em className="volume-round" style={{left: this.props.curVolume * 100 + '%'}}></em>
                    </div>
                </div>
                <div className="lrc-wrap">
                    <ul className="lrc-main" style={{display: this.props.lrc.length ? 'block' : 'none'}}>
                        {   
                            this.props.lrc.map((el, i) => {
                                return (
                                    <li key={i} className={i === this.data.iNow ? 'lrc-cur' : ''}>{el.txt}</li>
                                )
                            })
                        }
                    </ul>
                    <div className="lrc-main" style={{display: this.props.lrc.length ? 'none' : 'block'}}>
                        暂无歌词
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount () {

        let audio=document.querySelector('#audio')
        let oWrap = document.querySelector('.volume-wrap')
        let oVolumn = document.querySelector('.volume-round')
        let that = this
		
        //		音量控制
        audio.volume = that.props.curVolume
        let w = parseInt(getStyle(oWrap, 'width'), 10);
        oVolumn.addEventListener('touchstart',function(e){
            let disX=e.touches[0].pageX / w * 100 - that.props.curVolume * 100;
            
            function fnMove(e){
                let l = e.touches[0].pageX / w * 100 - disX
                if(l > 100){
                    l=100
                }else if(l<0){
                    l=0
                }
                that.props.dispatch(changeVolumn(l / 100))
                audio.volume = l / 100
            }
            function fnEnd(e){
                let l=e.changedTouches[0].pageX/w*100-disX;
                if(l>100){
                    l=100;
                }else if(l<0){
                    l=0;
                }
                audio.volume = l / 100
                document.removeEventListener('touchmove',fnMove);
                document.removeEventListener('touchend',fnEnd);
            }
            document.addEventListener('touchmove',fnMove);
            document.addEventListener('touchend',fnEnd);
        })

    }
}

const mapStateToProps = (state, ownProps) => ({
    curVolume: state.curConfig.curVolume,
    curTime: state.curConfig.curTime,
    lrc: state.curSong.lrc
})

export default connect(mapStateToProps)(MiddleLrc)