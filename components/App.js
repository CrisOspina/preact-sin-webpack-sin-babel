const { h } = window.preact
const htm = window.htm
const jsx = htm.bind(h)

import { Navbar } from './Navbar.js'
import { Card } from './Card.js'

export const App = () => {
  return jsx`
    <div class="container mx-auto px-4 my-5">
      <${Navbar} />
      <${Card} />
    </div>
  `
}