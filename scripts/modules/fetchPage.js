import { getPhotographersPage } from '../pagephotographer.js'

//___Récupération des données___//
function myFetch2(){
    let source = './data/photographers.json'
    fetch(source).then(async (res) => {
        if (res.ok) {
            const json = await res.json()
            getPhotographersPage(json)
        } else {
            console.log('erreur')
        }
    })
}

export { myFetch2 }