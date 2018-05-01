const ENV = 'dev'

const DOMAIN = ENV === 'dev' ? '' : 'http://xinghaiyang.com'

const API = {
    SEARCH: DOMAIN + '/music/kugou/search.php',
    SONG: DOMAIN + '/music/kugou/song.php',
    QRCODE: DOMAIN + '/phpqrcode/index.php',
}



export default API

