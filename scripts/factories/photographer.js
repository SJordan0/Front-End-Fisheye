//___Récupération de l'id dans l'url___//
let str = window.location.href
let url = new URL(str)
let login = url.searchParams.get('id')

//___Récupération des données du photographe___//
class Photographer {
    constructor(name, id, city, country, tags, tagline, price, portrait, media) {
      this.name = name,
      this.id = id,
      this.city = city,
      this.country = country,
      this.tags = tags,
      this.tagline = tagline,
      this.price = price,
      this.portrait = portrait,
      this.media = media
    }
  }
  function getPhotographerData(photographers) {
    for (let i = 0; i < photographers.length; i++ ) {
      if (photographers[i].id == login) {
        photographer = new Photographer(
          photographers[i].name, 
          photographers[i].id, 
          photographers[i].city, 
          photographers[i].country,
          photographers[i].tags,
          photographers[i].tagline,
          photographers[i].price,
          photographers[i].portrait,
          photographers[i].media,
        )
        displayPhotographer(photographers[i])
        testFactory(photographers[i].media)
        return photographer
      }
    }
  }

  export { getPhotographerData }


/*function photographerFactory(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const picture = `../assets/photographers/${portrait}`;
    //const photographer = `photographer.html`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const button = document.createElement( 'button' );
        button.setAttribute = ("a", photographer);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement ('h3');
        h3.textContent = city + country;
        const p = document.createElement ('p');
        p.classList.add("tagline");
        p.textContent = tagline;
        const span = document.createElement ('span');
        span.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(span);
        return (article);
    }
    return { name, city, country, tagline, price, portrait, getUserCardDOM }
}

export { photographerFactory }*/