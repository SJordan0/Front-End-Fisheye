import { getPhotographers } from '../index.js'

function myFetch(){
    let source = './data/photographers.json'
    fetch(source).then(async (res) => {
        if (res.ok) {
            const json = await res.json()
            getPhotographers(json)
        } else {
            console.log('erreur')
        }
    })
}

export { myFetch }