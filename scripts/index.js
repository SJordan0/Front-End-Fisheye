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


            //Constructor pattern
            /*class Photographer {
                constructor(data) {
                    this._name = data.name
                    this._city = data.city
                    this._country = data.country
                    this._tagline = data.tagline
                    this._price = data.price
                    this._portrait = data.portrait
                }

                get name(){
                    return this._name
                }
                
                get city(){
                    return this._city
                }

                get country(){
                    return this._country
                }

                get tagline(){
                    return this._tagline
                }

                get price(){
                    return this._price
                }

                get portrait(){
                    return `/assets/photographers/${this._portrait}`
                }
            }*/   
        
        
        // et bien retourner le tableau photographers seulement une fois

   



/* async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();

	const $Profile = document.querySelector(".photographer_section");
	$Profile.addEventListener("click", () =>{
		console.log("Test");
	})
    
*/