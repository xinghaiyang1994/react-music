import React from 'react'
import { connect } from 'react-redux'

class MiddleLrc extends React.Component {
    render () {
        return (
            <div className="round section">
                <em className="round-top" style={{transform:'rotate(-'+ (this.props.isStart ? '0' : '45') + 'deg)'}}></em>
                <div className={this.props.isStart ? 'round-main' : 'round-main round-main-stop'} >
                    <div className="round-cell">
                        <img className="round-img" src={this.props.img} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    img: state.curSong.img,
    isStart: state.curConfig.isStart
})
export default connect(mapStateToProps)(MiddleLrc)