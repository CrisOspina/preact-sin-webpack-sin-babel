const { h } = window.preact
const htm = window.htm
const jsx = htm.bind(h)

import { Cards } from './Cards.js'
import { useHttp } from './useHttp.js'

export const Card = () => {
  const { data, loading } = useHttp('https://rickandmortyapi.com/api/character', [])

  return jsx`

    ${loading && jsx`<h1 class="text-3xl"> Espera un momento... <strong style="font-size: 100px"> 👽 </strong> </h1>`}

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      ${loading === false && data.map(personaje => jsx`
        <${Cards} ...${personaje}/>
      `)}
    </div>
  `
}