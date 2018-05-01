import React from 'react'

import HeaderSearch from '../components/HeaderSearch'
import MiddleSearch from '../components/MiddleSearch'
import FooterHome from '../components/FooterHome'
import { getSearch } from '../api'

class Search extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            aSong:[],
            txt: '',
            nTxt: '',
            isFocus: false,
            isSearch:false
        }
    }
    chgTxt = (e) => {
        this.setState({
            txt: e.target.value
        })
    }
    chgFocus = () => {
        this.setState({
            isFocus: true
        })
    }
    clearTxt = () => {
        this.setState({
            txt: ''
        })
    }
    search = () => {
        if (this.state.txt === '') return 
        let data = {
            keyword: this.state.txt
        }
        getSearch(data).then((res) => {
            // console.log(res)
            if (res.status === 1 && res.data.info && res.data.info.length > 0) {
                this.setState({
                    aSong: res.data.info,
                    isFocus: false,
                    isSearch: false
                })
            } else {
                this.setState({
                    aSong: [],
                    isSearch: true,
                    nTxt: this.state.txt
                })
                console.log(res)
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    render () {
        return (
            <div className="search">
                <div className="main">
                    <HeaderSearch 
                        history={this.props.history} 
                        isFocus={this.state.isFocus} 
                        txt={this.state.txt} 
                        onChgTxt={this.chgTxt} 
                        onChgFocus={this.chgFocus} 
                        onClearTxt={this.clearTxt}
                        onSearch={this.search}
                    />
                    <MiddleSearch nTxt={this.state.nTxt} isSearch={this.state.isSearch} aSong={this.state.aSong} />
                    <FooterHome />
                </div>	
            </div>
        )
    }
}

export default Search