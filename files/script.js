const zomatoUrl = "https://developers.zomato.com/api";
const api_key = '33d1c480bf5d69f93836c31489daab92';

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
    console.log(newInput);

    // let resultsOne = await axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=280&entity_type=${newInput}`, {
    //   headers: { "user-key": "33d1c480bf5d69f93836c31489daab92" },
    //   method: 'GET'
    // })

    // let cityId = resultsOne.data.location.city_id
    // console.log(cityId);
    // console.log(resultsOne)

    let results = await axios.get("https://developers.zomato.com/api/v2.1/location_details?entity_id=280&entity_type=city", {
      headers: { "user-key": "33d1c480bf5d69f93836c31489daab92" },
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
    let bestArray = results.data.best_rated_restaurant[0].restaurant.name
    let phoneNum = results.data.best_rated_restaurant[0].restaurant.phone_numbers
    let resImg = results.data.best_rated_restaurant[0].restaurant.featured_image

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
  renderResults()
  // function title(response) {
  //   section.innerHTML = ""
  //   for (let i = 0; i < searchResult.length; i++) {
  //     let searchElement = searchResult[i].data.location;
  //     console.log(searchElement);

  //     let liNode = document.createElement('section')
  //     liNode.innerHTML = `${searchElement} <div><img src = ${searchResult[i].location} </div>`
  //     section.appendChild(liNode)
  //   }
  // }
  // title()



}

