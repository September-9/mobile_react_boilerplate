import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import Routes from './routes'
import * as store from './store'

let App = ()=>{
  return (
    <Provider {...store}>
      <Routes />
    </Provider>
  )
}


const setRem = ()=>{
  let docWidth = utils.dom.getDocWidth()
  if (docWidth > 1440){
    docWidth = 1440
  }
  document.documentElement.style.fontSize = docWidth/10 + 'px'
}

window.addEventListener('resize', setRem, false)
window.addEventListener('pageshow', function (e) {
  if (e.persisted) {
    setRem()
  }
})
const dpr = window.devicePixelRatio || 1
// adjust body font size
function setBodyFontSize () {
  if (document.body) {
    document.body.style.fontSize = (12 * dpr) + 'px'
  }
  else {
    document.addEventListener('DOMContentLoaded', setBodyFontSize)
  }
}
setBodyFontSize();

if (document.readyState === 'complete') {
  setRem()
} else {
  document.addEventListener('DOMContentLoaded', setRem, false);
}

window.addEventListener('DOMContentLoaded', ()=>{
  ReactDOM.render(<App />, document.querySelector('.app'))
})


