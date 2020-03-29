const { h } = window.preact
const htm = window.htm
const jsx = htm.bind(h)

export const Cards = ({
  name,
  image,
  status,
  species,
  type,
  gender,
  origin
}) => {
  return jsx`
    <div class="max-w-sm rounded overflow-hidden shadow-lg p-3 card">
      <img class="w-full animated fadeIn card-img" src="${image}" alt="${name}" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 animated fadeIn">${name}</div>
        <p class="text-gray-700 text-base">
          <p class="animated fadeIn"><strong> ${status} </strong> </p>
          <p class="animated fadeIn"><strong> ${species} </strong> </p>
          <p class="animated fadeIn"><strong> ${type} </strong> </p>
          <p class="animated fadeIn"><strong> ${gender} </strong> </p>
          <p class="animated fadeIn"><strong> ${origin.name}</strong></p>
        </p>
      </div>
      <div class="px-6 py-4">
        <span 
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 card-img">
          ${status}
        </span>
      </div>
    </div>
  `
}