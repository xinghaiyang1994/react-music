import React from 'react'
import { Link } from 'react-router-dom'

class HeaderSong extends React.Component {
    back = () => {
        this.props.history.go(-1)
    }
    render () {
        return (
            <header>
                <i className="icon icon-back" onClick={this.back}></i>
                <h2 className="title">我喜欢的音乐</h2>
                <Link to="/search" className="icon icon-search"></Link>
            </header>
        )
    }
}



export default HeaderSong