Restaurant Finder
## http://restaurantfindr.surge.sh/

## Technologies : css, html, javascript, functions, animations & tbd

## Wireframe: 
![wireframe] (https://www.docdroid.net/xRnzWzT/wireframe-pdf.pdf)

##Description:
Restaurant finder website will be used to search for restaurants in a specific city. The user will enter the website and type in the name of the city they want to search for. This search result will populate a list of restaurants based on that zip code. The list will allow the user to see the title, address and a photo of the restaurant. 

## Functions: 
User must be able to utilize the search box to retrieve information based on city name

The search box must populate a list of restaurants based on the city

The restaurants must also show additional information ie. address, image, directions, etc.

The nav bar must "link" to the search page and also one additional page listing the available cities


## Stretch Goals:
Make the links actually take the user to a new page 
The user must be able to click on the name of the restaurant and that should bring them to the restaurants url

## API Data:
Zomato api will be used to pull restaurants based on location along with images and additional info

{data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
config: {url: "https://developers.zomato.com/api/v2.1/categories", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
data:
categories: Array(13)
0: {categories: {…}}
1: {categories: {…}}
2: {categories: {…}}
3: {categories: {…}}
4: {categories: {…}}
5:
categories: {id: 6, name: "Cafes"}
__proto__: Object
6: {categories: {…}}
7: {categories: {…}}
8:
categories: {id: 9, name: "Lunch"}
__proto__: Object
9:
categories: {id: 10, name: "Dinner"}
__proto__: Object
10:
categories: {id: 11, name: "Pubs & Bars"}
__proto__: Object
11: {categories: {…}}
12: {categories: {…}}
length: 13
__proto__: Array(0)
__proto__: Object
headers: {cache-control: "max-age=0, no-cache, no-store, no-transform", content-length: "218", content-type: "application/json"}
request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
status: 200
statusText: ""
__proto__: Object

