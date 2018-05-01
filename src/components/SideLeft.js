import React from 'react'

import dImg from '../assets/img/default.jpg'

import { getQrcode } from '../api'

class SideLeft extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            src: ''
        }
    }
    closeLeft = () => {
        this.props.onCloseLeft()
    }
    render () {
        return (
            <div className={this.props.leftShow ? 'side-left side-left-open' : 'side-left'}>
                <div className="main">
                    <div className="header">
                        <img src={dImg} className="photo" alt=""/>
                        <h2 className="name">React 音乐播放器</h2>
                    </div>
                    {
                        this.state.src && (
                            <div className="main-qrcode">
                                <h3>手机扫一扫体验</h3>
                                <img src={this.state.src} id="qrcode" alt="" />
                            </div>
                        )
                    }
                </div>
                <div className="side-close" onClick={this.closeLeft}></div>
            </div>
        )
    }
    componentDidMount () {
        getQrcode({
            href: window.location.href
        }).then((res) => {
            let src=res.match(/(?=")(.*)(?=")/)[0].replace('"','');
            this.setState({
                src: 'http://www.xinghaiyang.com/phpqrcode/' + src
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default SideLeft