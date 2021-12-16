// Création d'une carte photographe ______________________________________________________________________


let photographersCards = document.getElementById('photographersCards') // cible la section conteneur des cartes photographes

function createAcard(photographer) {
    let article = document.createElement( 'article' );
    let img = document.createElement( 'img' );
    let h2 = document.createElement( 'h2' );
    let Location = document.createElement( 'h3' );
    let Tagline = document.createElement( 'p' );
    let Price = document.createElement( 'span' );
    article.appendChild(img)
    article.appendChild(h2)
    article.appendChild(Location)
    article.appendChild(Tagline)
    article.appendChild(Price)
    photographersCards.appendChild(article)

  // Contenu des cartes photographes
  h2.innerHTML = `${photographer.name}`
  Location.innerHTML = `${photographer.city}, ${photographer.country}`
  Tagline.innerHTML = `${photographer.tagline}`
  Price.innerHTML = `${photographer.price}€/jour`
  Price.innerHTML = `${photographer.price}€/jour`
  article.setAttribute('id', `article${photographer.id}`)
}

//_____________________________________________________________________________________________________________
export { createAcard }