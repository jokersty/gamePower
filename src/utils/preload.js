const config = require("./config.js")

var images = new Array(),
    imgList = [
        "/img/mask-bg.jpg"
    ],
    imgLength = imgList.length,
    PromiseAll = []

function preLoadImg() {
    for (var i = 0; i < imgLength; i++) {
        PromiseAll[i] = new Promise((resolve, reject) => {
            images[i] = new Image()
            images[i].src = `${config.base.url}${imgList[i]}`
            images[i].onload = () =>{
                resolve()
            }
            images[i].onerror = () => {
                reject(`图片加载错误`)
            }
        })
    }
    return Promise.all(PromiseAll)
}

export default {
    preLoadImg
}
