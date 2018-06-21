import { combineReducers } from 'redux'

import { tranLrc } from '../utils/util'
import songList from './songList'

let curSongState = {
    title: '广东爱情故事',
    author: '广东雨神',
    hash: '2a25aaff4b6c84b859b4d77f944de57a',
    img: 'http://singerimg.kugou.com/uploadpic/softhead/400/20180517/20180517114950723.jpg',
    url: 'http://fs.w.kugou.com/201806212154/e225b1575771f89e5cae0880413677e4/G114/M0B/00/13/UpQEAFnocumANGxzADRUF4h4Zks442.mp3',
    album: '未知专辑',
    lrc: tranLrc(`[00:00.03]广东雨神 - 广东爱情故事
    [00:02.61]词：广东雨神
    [00:03.83]曲：广东雨神
    [00:18.87]安静地离去
    [00:21.66]和孤单一起
    [00:26.47]拥挤的回忆时间抹去
    [00:33.26]人在广东已经漂泊十年
    [00:36.32]有时也怀念当初一起
    [00:38.41]经已改变
    [00:40.88]让这天空将你我相连
    [00:44.00]怀念你走了云的天空还任性
    [00:51.48]是否它相信在乎
    [00:53.10]反而容易放弃
    [00:55.92]非要最后一无所有
    [00:59.01]才无所畏惧
    [01:08.94]我知道好多时候
    [01:11.88]爱一个人是没任何理由的
    [01:15.92]你同其他女子不一样的
    [01:18.54]你从来都不问我钟意你什么
    [01:21.49]反而我成日都问你
    [01:24.96]你究竟钟意我什么
    [01:33.79]笑的多一些改变要彻底
    [01:41.34]直面这世界真假游戏
    [01:48.24]人在广东已经漂泊十年
    [01:51.34]有时也怀念当初一起
    [01:53.55]经已改变
    [01:55.81]让这天空将你我相连
    [01:59.23]怀念你走了云的天空还任性
    [02:06.41]是否它相信下一次的相遇
    [02:10.83]就算最后一无所有
    [02:13.83]也无所畏惧
    [02:18.78]相信你就如当初一起
    [02:22.24]行过广东这十年幸福走了
    [02:28.14]唏嘘感慨那当初
    [02:33.76]相信你哪怕坚强
    [02:36.44]是假装出勇敢的面具
    [02:41.33]也不能少活得精彩的勇气
    [02:48.34]人在广东已经漂泊十年
    [02:51.30]有时也怀念当初一起
    [02:53.48]经已改变
    [02:55.83]让这天空将你我相连
    [02:59.22]怀念你走了云的天空
    [03:04.72]还任性是否它相信
    [03:07.50]下一次的相遇
    [03:10.84]就算最后一无所有
    [03:13.78]也无所畏惧
    [03:18.50]就算最后一无所有
    [03:21.08]我都无所畏惧`)
} 

function curSong (state = curSongState, action) {
    switch (action.type) {
        case 'TAB_SONG':
            return action.song
        default:
            return state
    }
}

let curConfigState = {
    mode: 'loop',       //播放模式
    isStart: true,     //是否播放
    curTime: 0,			//歌曲当前播放时长
    allTime: 0,			//歌曲总播放时长
    curVolume: 0.8		//音量控制
}

function curConfig (state = curConfigState, action) {
    switch (action.type) {
        case 'CTRL_START':
            let isStart
            if (action.state === 'toggle') {
                isStart = !state.isStart
            } else {
                isStart = action.state
            }
            return Object.assign({}, state, {
                isStart
            })
        case 'UPDATE_TIME': 
            let time = {}   
            if (typeof action.time.curTime !== 'undefined') {
                time.curTime = action.time.curTime
            }
            if (typeof action.time.allTime !== 'undefined') {
                time.allTime = isNaN(action.time.allTime) ? 0 : action.time.allTime
            }
            return Object.assign({}, state, time)
        case 'CHANGE_PROGRESS':
            let curTime = state.allTime * action.progress
            return Object.assign({}, state, {
                curTime
            })
        case 'CHANGE_VOLUMN':
            return Object.assign({}, state, {
                curVolume: action.curVolume
            })
        case 'CHANGE_MODE':
            let mode
            switch (state.mode) {
                case 'loop':
                    mode = 'random'
                    break
                case 'random':
                    mode = 'one'
                    break
                case 'one':
                    mode = 'loop'
                    break
                default:
                    mode = 'loop' 
            }
            return Object.assign({}, state, {
                mode
            })
        default:
            return state
    }
}

export default combineReducers({
    curSong, songList ,curConfig
})