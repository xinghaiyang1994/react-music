import React from 'react'

// import $ from 'jquery'
import Share from '../assets/js/share'

class SideShare extends React.Component {
    closeShare = () => {
        this.props.onCloseShare()
    }
    render () {
        return (
            <div className={this.props.isShare ? 'share share-open' : 'share'}>
                <div className="share-main">
                    <h2 className="share-title">分享:</h2>
                    <div className="share-wrap">
                    <i className="icon icon-share-qzone" data-share="qzone"></i>
                    <i className="icon icon-share-wb" data-share="weibo"></i>
                    </div>
                </div>
                <div className="share-close" onClick={this.closeShare}></div>
            </div>
        )
    }
    componentDidMount () {
        new Share({  
		    dom:['.icon-share-qzone','.icon-share-wb'],         
		    contentDom:'http://www.music.xinghaiyang.com',  
		    title:'react 移动版网易云音乐'        
        })
    }
}

export default SideShare