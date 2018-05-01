import React from 'react'


class HeaderSearch extends React.Component {
    back = () => {
        this.props.history.go(-1)
    }
    chgTxt = (e) => {
        this.props.onChgTxt(e)
    }
    chgFocus = () => {
        this.props.onChgFocus()
    }
    clearTxt = () => {
        this.props.onClearTxt()
    }
    search = () => {
        this.props.onSearch()
    }
    render () {
        return (
            <header>
                <i className="icon icon-back" onClick={this.back}></i>
                <form className="search-wrap" onSubmit={(e) => {
                    this.search()
                    e.preventDefault()
                }}>
                    <input type="text" placeholder="搜索音乐、歌手、歌词、用户" className="search-inp" value={this.props.txt} onInput={this.chgTxt} onFocus={this.chgFocus}/>
                    <i className="icon icon-cancel" onClick={this.clearTxt} style={{display: this.props.txt !== '' ? 'block' : 'none'}}></i>
                    <div className="search-sub" onClick={this.search} style={{display: (this.props.txt !== '' && this.props.isFocus) ? 'block' : 'none' }}>
                        搜索"{this.props.txt}"
                    </div>
                </form>
            </header>
        )
    }
}

export default HeaderSearch