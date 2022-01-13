import { myFetch } from './modules/fetch.js'
import { createAcard } from './modules/card.js'

myFetch()

//__Récupération et affichage des données des photographes___//
function getPhotographers(json) {
    const photographers = json.photographers
    showPhotographers(photographers)
}

export { getPhotographers }

//___Affichage des données___//
function showPhotographers(photographers) {
    for (let i = 0; i < photographers.length; i++) {
      createAcard(photographers[i]) 
    }
}