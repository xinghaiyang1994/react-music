import React from 'react'
import {
    Link,
    NavLink
} from 'react-router-dom'

import SideLeft from './SideLeft'

class HeaderHome extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            leftShow: false
        }
    }
    openLeft = () => {
        this.setState({
            leftShow: true
        })
    }
    closeLeft = () => {
        this.setState({
            leftShow: false
        })
    }
    render () {
        return (
            <header>
                <i className="icon icon-nav" onClick={this.openLeft}></i>
                <nav>
                    <NavLink to={`${this.props.url}/music`} activeClassName="router-link-active" className="icon-nav-cm icon-nav-music"></NavLink>
                    <NavLink to={`${this.props.url}/song`} activeClassName="router-link-active" className="icon-nav-cm icon-nav-song"></NavLink>
                    <NavLink to={`${this.props.url}/group`} activeClassName="router-link-active" className="icon-nav-cm icon-nav-group"></NavLink>
                </nav>
                <Link to="/search" className="icon icon-search"></Link>
                <SideLeft leftShow={this.state.leftShow} onCloseLeft={this.closeLeft} />
            </header>
        )
    }
}

export default HeaderHome