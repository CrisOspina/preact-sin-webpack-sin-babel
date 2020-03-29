const { h, render } = window.preact
const htm = window.htm
const jsx = htm.bind(h)

import { App } from './App.js'
 
render(jsx`
  <${App} />`, 
  document.body
)