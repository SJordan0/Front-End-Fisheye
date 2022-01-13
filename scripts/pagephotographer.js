import { myFetch2 } from "./modules/fetchPage.js";
import { getPhotographerData } from "./modules/photographer.js";
import { displayModal } from "./modules/contactForm.js";

myFetch2()

//___Récupération des données___//
function getPhotographersPage(json) {
    const photographers = json.photographers
    const media = json.media
    for (let photographer of photographers) {
      let mediaList = []  
      Object.defineProperty(photographer, 'media', {
        value: mediaList,
        writable: true 
      })
      for (let medium of media) {
        if (photographer.id == medium.photographerId) {
          mediaList.push(medium)
        }
      }
    }
    //___Affichage des données___//
    getPhotographerData(json.photographers)
  }
  
  export { getPhotographersPage }
  
//___Ouverture de la modale___//
  const contact = document.querySelector('.contact_button')
  contact.addEventListener('click', () => displayModal())