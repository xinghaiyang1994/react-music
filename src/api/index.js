import API from '../utils/config'
import ajax from '../utils/ajax'

function getSearch (data) {
    return ajax({
        type: 'get',
        url: API.SEARCH,
        data
    })
}

function getSong (data) {
    return ajax({
        type: 'get',
        url: API.SONG,
        data
    })
}

function getQrcode (data) {
    return ajax({
        type: 'get',
        url: API.QRCODE,
        data
    })
}

export {
    getSearch, getSong, getQrcode
}

