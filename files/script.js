const zomatoUrl = "https://developers.zomato.com/api";
const api_key = '33d1c480bf5d69f93836c31489daab92';

window.onload = function (event) {
  const body = document.body;


  const input = document.querySelector('#city')
  const button = document.querySelector("button")
  const div = document.querySelector("#resInfo")
  const searchInput = this.document.querySelector("input")
  const section = document.querySelector('.section')

  button.addEventListener('click', async function (event) {
    event.preventDefault()
    let textInput = searchInput.value;
    const API = await axios.get("https://developers.zomato.com/api/v2.1/location_details?entity_id=280&entity_type=city", {
      headers: { "user-key": "33d1c480bf5d69f93836c31489daab92" }

    })

    let searchResult = API;
    console.log(searchResult);

    // function title(response) {
    //   section.innerHTML = ""
    //   for (let i = 0; i < searchResult.length; i++) {
    //     let searchElement = searchResult[i].categories;
    //     console.log(searchElement);

    //     let liNode = document.createElement('li')
    //     liNode.innerHTML = `<div>${searchElement}</div>`
    //     document.querySelector('.section').appendChild('liNode')
    //     // console.log(liNode)
    //     button.appendChild('.section')
    //   }

    // function renderResults(results) {
    //   results.forEach(function (restaurantObj) {

    //     // grabbing all of the values from the objects from "results" 
    //     const city = movieObj.city
    //     const title = movieObj.name


    //     // creating a new div in the html and calling it class: movie container
    //     const restaurantContainer = document.createElement('div')
    //     restaurantContainer.className = "restaurant-container"

    //     // creating a new element and giving it title-header and pulling information from the title and year object keys
    //     const titleHeader = document.createElement('.section')
    //     titleHeader.className = 'title-header'
    //     titleHeader.innerHTML = `${name}`
    //     restaurantContainer.append(titleHeader)

    //     // moving restaurant container into the results div allowing it to appear on screen
    //     section.appendChild(restaurantContainer)


    // js for image slider 
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }

  }


  )
}
