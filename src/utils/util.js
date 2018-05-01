function toTime (time) {
	return parseInt(time.split(':')[0])*6000+parseInt(time.split(':')[1]*100);
}	

function toDou (num) {
	return num<10?'0'+num:num;
}

function toShowTime (time) {
    let min=parseInt(time/6000);
	let sen=parseInt((time%6000)/100);
	return toDou(min)+':'+toDou(sen);
}

function getStyle (obj,name){
    return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj,false)[name]    
}

function rnd (m, n) {
    return Math.floor(m + Math.random() * (n - m + 1))
}

function toTime(time){
	return parseInt(time.split(':')[0])*6000+parseInt(time.split(':')[1]*100);
}

function tranLrc (lrc) {
    return lrc.split('[').slice(1).map(el => {
        return {
            time: toTime(el.split(']')[0]),
            txt: el.split(']')[1]
        }
    })
}
export {
    toTime, toDou, toShowTime, getStyle, rnd, tranLrc
}
