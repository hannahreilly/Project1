const zomatoUrl = "https://developers.zomato.com/api";
const api_key = '33d1c480bf5d69f93836c31489daab92';

window.onload = function (event) {
  const body = document.body;


  const input = document.querySelector('#city')
  const button = document.querySelector("button")
  const div = document.querySelector("#resInfo")
  const searchInput = this.document.querySelector("input")
  const section = document.querySelector('section')

  button.addEventListener('click', async function (event) {
    event.preventDefault()
    let textInput = searchInput.value;
    const API = await axios.get("https://developers.zomato.com/api/v2.1/categories", {
      headers: { "user-key": "33d1c480bf5d69f93836c31489daab92" }

    })

    locations(params){
      return this
        .get('locations', qs.stringify(params))
        .then(data => data.location_suggestions);
    }
 
    // let searchResponse = API.data.Search;
    // console.log(searchResponse);

    // function title(response) {
    //   section.innerHTML = ""
    //   for (let i = 0; i < searchResponse.length; i++) {
    //     let searchElement = searchResponse[i].data;
    //     console.log(searchElement);

    //     let liNode = document.createElement('section')
    //     liNode.innerHTML = `${searchElement} <div><img src = ${searchResponse[i].data}" </div>`
    //     section.appendChild(liNode)
    //   }
    // }
  }
  )

// add js for image slider 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


}