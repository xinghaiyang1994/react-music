import { getSong } from "../api"

import { rnd, tranLrc } from "../utils/util";
function addSong (hash) {
    return function (dispatch) {
        return getSong({
            hash
        }).then((res) => {
            // console.log(res)
            if (res.status === 1) {
                let nSong = {
                    title: res.data.song_name,
                    author: res.data.author_name,
                    hash: res.data.hash,
                    img: res.data.img,
                    url: res.data.play_url,
                    album: res.data.album_name,
                    lrc: tranLrc(res.data.lyrics)
                }
                dispatch({
                    type: 'ADD_SONG',
                    curSong: nSong
                })
                dispatch(tabSong(nSong))
            }
        })
    }
}

function ctrlStart (state) {
    return {
        type: 'CTRL_START',
        state
    }
}

function updateTime (time) {
    return {
        type: 'UPDATE_TIME',
        time
    }
}

function changepProgress (progress) {
    return {
        type: 'CHANGE_PROGRESS',
        progress
    }
}

function changeVolumn (curVolume) {
    return {
        type: 'CHANGE_VOLUMN',
        curVolume
    }
}

function tabSong (song) {
    return {
        type: 'TAB_SONG',
        song
    }
}

function delSong (song) {
    return {
        type: 'DEL_SONG',
        song
    }
}

function changeMode (song) {
    return {
        type: 'CHANGE_MODE'
    }
}

function chooseSong (data) {
    return function (dispatch) {
        dispatch(ctrlStart(false))
        let index 
        data.songList.forEach((el, i)=> {
            if (el.hash === data.curSong.hash) {
                index = i
            }  
        })
        if (data.songList.length <= 1) {
            dispatch(tabSong(data.songList[0]))
        } else {
            switch (data.mode) {
                case 'loop':
                    if (data.direction === 'next') {
                        if (index === data.songList.length - 1) {
                            index = 0
                        } else {
                            index ++
                        }
                    } else {
                        if (index === 0) {
                            index = data.songList.length - 1
                        } else {
                            index --
                        }
                    }
                    break;
                    case 'random':
                    let nIndex
                    do {
                        nIndex = rnd(0, data.songList.length - 1)
                    } while (nIndex === index);
                    index = nIndex
                    break;
                case 'one':
                    break;
                default:
                    break;
            }
            dispatch(tabSong(data.songList[index]))
        }
        dispatch(ctrlStart(true))
    }
}

export {
    addSong, 
    ctrlStart, 
    updateTime,
    changepProgress,
    changeVolumn,
    tabSong,
    delSong,
    changeMode,
    chooseSong
}