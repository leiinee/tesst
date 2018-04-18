
fetchData(){
  fetch ('https://api.magicthegathering.io/v1/cards')
  .then(res => res.json())
  .then((res) => {
    createPerson(res);
  })
  .catch(err => console.log(err))

  function createPerson(result){
    var details = document.getElementById('cards');
    details.innerHTML += "<span>Name: " + result.name + "</span>";
      details.innerHTML += "<span>Height:   " + result.height + "CM</span>";
      details.innerHTML += "<span>Mass: " + result.mass + "KG</span>";
      details.innerHTML += "<span>Gender:   " + result.gender + "</span>";
    }
