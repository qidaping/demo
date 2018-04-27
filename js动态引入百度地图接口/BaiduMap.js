
export default {
  init
}
function init () {
  const BMAPurl = 'https://api.map.baidu.com/api?v=3.0&ak=tGGu4K7pGH3sLRcYKqWOypRS7GHbT7z9&s=1&callback=onBMapCallback'
  return new Promise((resolve, reject) => {
    if (typeof BMap !== 'undefined') {
      resolve()
      return true
    }
    window.onBMapCallback = () => {
      console.log('百度地图脚本初始化成功...')
      resolve()
    }
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = BMAPurl
    document.body.appendChild(script)
  })
}
