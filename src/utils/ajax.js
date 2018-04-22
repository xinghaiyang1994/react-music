import axios from 'axios'

function method (obj) {
    const url = obj.url
    const type = obj.type
    const data = Object.assign({}, obj.data)
    if (type === 'post') {
        return axios.post(url, data)
    } else {
        return axios.get(url, {
            params: data
        })
    }
}

function ajax (obj) {
    return new Promise(function (resolve, reject) {
        method(obj).then((res) => {
            if (res.status === 200) {
                resolve(res.data)
            } else {
                reject(res)
            }
        }).catch((res) => {
            reject(res)
        })
    })
}

export default ajax



