import { myFetch } from './modules/fetch.js'
import { createAcard } from './modules/card.js'

myFetch()

function getPhotographers(json) {
    const photographers = json.photographers
    showPhotographers(photographers)
}

export { getPhotographers }

function showPhotographers(photographers) {
    for (let i = 0; i < photographers.length; i++) {
      createAcard(photographers[i]) 
    }
}

window.addEventListener('scroll', () => content())