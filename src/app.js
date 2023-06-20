import './style.scss';

// function to generate cards
function generateBlogCard(data) {
    return `
    <div class="col-4">
      <div class="p-card">
        <h5 class="category" style="text-transform: uppercase;"><a href=${data._embedded['wp:term'][1][0].link} >${data._embedded['wp:term'][1][0].name} </a> </h5>
        <hr class="u-sv1">
        <div class="p-card__content">
          <img class="p-card__image" alt="" height="185" width="330" src="${data.featured_media}">
          <h3>
            <a href="${data.link}" class="title">${data.title.rendered}</a>
          </h3>
          <p class="u-no-padding--bottom">By <a href= ${data._embedded.author[0].link} >${data._embedded.author[0].name}</a> on <em class="date">${new Date(data.date).toLocaleDateString()}</em></p>
          <hr class="u-sv1">
          <h5 "><a href=${data._embedded['wp:term'][0][0].link} >${data._embedded['wp:term'][0][0].name} </a> </h5>
        </div>
      </div>
    </div>
  `;
  }

fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
  .then((response) => response.json())
  .then((data) => {
    // generate the cards
    const blogCardsContainer = document.querySelector("#blog-cards");
    data.forEach((postData) => {
      blogCardsContainer.innerHTML += generateBlogCard(postData);
    });
  });