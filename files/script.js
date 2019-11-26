const zomatoUrl = "https://developers.zomato.com/api";
const api_key = '33d1c480bf5d69f93836c31489daab92';

window.onload = function (event) {
  const body = document.body;


  const input = document.querySelector('#city')
  const button = document.querySelector("button")
  const div = document.querySelector("#resInfo")
  const searchInput = document.querySelector("input")
  const section = document.querySelector('.section')

  button.addEventListener('click', async function (event) {
    event.preventDefault()
    let textInput = searchInput.value;
    let results = await axios.get("https://developers.zomato.com/api/v2.1/location_details?entity_id=280&entity_type=city", {
      headers: { "user-key": "33d1c480bf5d69f93836c31489daab92" },
      method: 'GET'

    })
    let bestArray = results.data.best_rated_restaurant[0].restaurant.name
    let phoneNum = results.data.best_rated_restaurant[0].restaurant.phone_numbers

    // console.log(results);
    console.log(bestArray)
    function renderResults(results) {
      section.innerHTML = ""
      for (let i = 0; i < bestArray.length; i++) {

        let h3Node = document.createElement('h3')
        h3Node.innerHTML = `${bestArray}`
        section.appendChild(h3Node)
  
        let h4Node = document.createElement('h4')
        h4Node.innerHTML = `${phoneNum}`
        section.appendChild(h4Node)
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

    // js for image slider 
    // $(window).load(function() {
    //   $('.flexslider').flexslider({
    //     animation: "slide"
    //   });
    // });
  }

  )
}
