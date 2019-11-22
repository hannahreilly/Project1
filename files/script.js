
const zomatoUrl = "https://developers.zomato.com/api";
const api_key = '33d1c480bf5d69f93836c31489daab92';

window.onload = function (event) {
  const body = document.body;


  const input = document.querySelector('#city')
  const button = document.querySelector("#getRest")
  const div = document.querySelector("#resInfo")

  button.addEventListener('click', async function (event) {
    event.preventDefault()
    let categories = input.value;


    let API = await axios.get("https://developers.zomato.com/api/v2.1/categories", {
      headers: { "user-key": "33d1c480bf5d69f93836c31489daab92" }
    });
    console.log(API)

    function renderResults(response) {
      const breakfast = response.data.categories.Breakfast[7];
      const lunch = response.data.categories.Lunch[8];
      const dinner = response.data.categories.Dinner[9];

      const breakfastPara = document.createElement('h4');
      const lunchPara = document.createElement('h4');
      const dinnerPara = document.createElement('h4');

      breakfastPara.innerHTML = breakfast;
      div.appendChild(breakfastPara)
      lunchPara.innerHTML = lunch;
      div.appendChild(lunchPara)
      dinnerPara.innerHTML = dinner;
      div.appendChild(dinner)
    }

      })
}
