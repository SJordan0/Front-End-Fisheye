let photographersSection = document.querySelector(".photographer_section");

function createAcard(photographer) {
    let article = document.createElement( 'article' );
    let link = document.createElement('a');
    let img = document.createElement( 'img' );
    let h2 = document.createElement( 'h2' );
    let Location = document.createElement( 'h3' );
    let Tagline = document.createElement( 'p' );
    let Price = document.createElement( 'span' );
    link.appendChild(img)
    link.appendChild(h2)
    article.appendChild(link)
    article.appendChild(Location)
    article.appendChild(Tagline)
    article.appendChild(Price)
    photographersSection.appendChild(article)

  // Contenu des cartes photographes
  img.setAttribute('src', `./assets/photographers/${photographer.portrait}`)
  img.setAttribute('alt', `portrait du photographe ${photographer.name}`)
  link.setAttribute('href', 'photographer.html?id=' + `${photographer.id}`)
  link.setAttribute('aria-label', `${photographer.name}`) 
  h2.innerHTML = `${photographer.name}`
  Location.innerHTML = `${photographer.city}, ${photographer.country}`
  Tagline.innerHTML = `${photographer.tagline}`
  Price.innerHTML = `${photographer.price}€/jour`
  article.setAttribute('id', `article${photographer.id}`)
}

export { createAcard }