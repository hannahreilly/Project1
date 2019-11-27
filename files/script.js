const zomatoUrl = "https://developers.zomato.com/api";
const api_key = '33d1c480bf5d69f93836c31489daab92';

let newApi = `https://developers.zomato.com/api/v2.1/locations?query=`
let newApi2 = `&apikey=33d1c480bf5d69f93836c31489daab92`
window.onload = function (event) {
  const body = document.body;

  const input = document.querySelector('input')
  console.log(input);



  const button = document.querySelector("button")
  const restDiv = document.querySelector(".resInfo")
  const searchInput = document.querySelector("input")
  const section = document.querySelector('.section')


  button.addEventListener('click', async function (event) {
    event.preventDefault()

    
    const newInput = input.value;
    let result22 = await axios.get(`${newApi}${newInput}${newApi2}`)
    // console.log(result22);
    let result33 = result22.data.location_suggestions[0].entity_id
    // console.log(result33)

    // let result44 = await axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${result33}&entity_type=city`)
    // console.log(result44)


    let results = await axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${result33}&entity_type=city`, {
      headers: {"user-key": "33d1c480bf5d69f93836c31489daab92"}, 
      method: 'GET'
    })

    console.log(results);
    renderResults(results);
  })

  console.log(results);

  // console.log(results);
  // console.log(bestArray)

  function renderResults(results) {
    section.innerHTML = ""

    let forlooped = results.data.best_rated_restaurant
    // let bestArray = results.data.best_rated_restaurant[0].restaurant.name
    // let phoneNum = results.data.best_rated_restaurant[0].restaurant.phone_numbers
    // let resImg = results.data.best_rated_restaurant[0].restaurant.featured_image

    for (let i = 0; i < 9; i++) {
      let element1 = forlooped[i].restaurant.name
      let element2 = forlooped[i].restaurant.phone_numbers
      let image1 = forlooped[i].restaurant.featured_image
      let restAddress = forlooped[i].restaurant.location.address

      // let element3 = forlooped[i]
      console.log(element1)
      console.log(element2)

      let restingDiv = document.createElement("div")
      let restName = document.createElement('h3')
      restName.innerHTML = `${element1}`
      restName.classList.add("results")

      restingDiv.appendChild(restName)

      let phone = document.createElement('h4')
      phone.innerHTML = `${element2}`
      phone.classList.add("results")
      restingDiv.appendChild(phone)
      restingDiv.classList.add("resting")

      let address = document.createElement('h4')
      address.innerHTML = `${restAddress}`
      restingDiv.appendChild(address)

      let image2 = document.createElement('img')
      image2.src = image1
      restingDiv.appendChild(image2)
      image2.classList.add("imageClass")

      // section.appendChild(imgNode)
      section.appendChild(restingDiv)
    }
  }
  // renderResults()

//image slider//
  
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active","");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

}

