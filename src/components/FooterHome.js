import React from 'react'
import {
    Link
} from 'react-router-dom'
import { connect } from 'react-redux'; 

import SideBottom from './SideBottom'
import { ctrlStart } from '../actions'

function d2a(num){
	return num/180*Math.PI;
}
function draw(curTime,allTime,color){
	//底部控制暂停播放进度按钮
    let oC = document.querySelector('#canvas')
    if (oC == null) {
        return
    }
	let w = oC.width
	let h = oC.height
	let p = oC.getContext('2d')
	
	p.save()
	p.rotate(d2a(20))
	p.restore()
	p.lineWidth = 26
	let curDeg = curTime / allTime * 360
	p.clearRect(0, 0, w, h)
	p.beginPath()
	p.arc(w / 2,w / 2, 187, 0, d2a(360), true)
	p.strokeStyle='#c7c7c7'
	p.stroke()
	p.closePath()
	
	p.beginPath()
	p.save()
	p.translate(w/2,w/2)
	p.rotate(d2a(-90))
	p.arc(0,0,187,0,d2a(curDeg),false)
	p.strokeStyle='#d33a31'
	p.stroke()
	p.closePath()
	p.restore()		

}

class FooterHome extends React.Component {
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
    componentDidUpdate () {
        let color = this.props.isStart ? '#c7c7c7' : '#393939'
        draw(this.props.curTime, this.props.allTime, color)
    }
    render () {
        return (
            <div className="footer">
                <Link className="footer-left" to="/play">
                    <img className="footer-img" src={this.props.img} alt=""/>
                    <div className="footer-info">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.author}</p>
                    </div>
                </Link>
                <div className="canvas-wrap">
                    <canvas id="canvas" width="400" height="400"></canvas>
                    <i className={ this.props.isStart ? 'icon-foot-ctrl icon-foot-start' : 'icon-foot-ctrl icon-foot-stop'} onClick={this.ctrlStart}></i>
                </div>
                <i className="icon icon-foot-nav" onClick={this.openBottom}></i>
                <SideBottom bottomShow={this.state.bottomShow} onCloseBottom={this.closeBottom}/>
            </div>
        )
    }
    componentDidMount () {
        let color = this.props.isStart ? '#c7c7c7' : '#393939'
        draw(this.props.curTime, this.props.allTime, color)
    }
}

const mapStateToProps = (state, ownProps) => ({
    img: state.curSong.img,
    title: state.curSong.title,     
    author: state.curSong.author, 
    isStart: state.curConfig.isStart,
    curTime: state.curConfig.curTime,
    allTime: state.curConfig.allTime,
})

export default connect(mapStateToProps)(FooterHome)