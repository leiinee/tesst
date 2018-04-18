// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("cardImage");


fetchData(){
  fetch ('https://api.magicthegathering.io/v1/cards')
  .then(res => res.json())
  .then((res) => {
    createPerson(res);
  })
  .catch(err => console.log(err))

  function createPerson(result){
    var details = document.getElementById('cardImage');
    details.innerHTML += "<span>Name: " + result.name + "</span>";
      details.innerHTML += "<span>Height:   " + result.height + "CM</span>";
      details.innerHTML += "<span>Mass: " + result.mass + "KG</span>";
      details.innerHTML += "<span>Gender:   " + result.gender + "</span>";
    }
