let button = document.getElementById("button");
let image= document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");
const changePokemon=async()=>{
    let randomNumber =Math.ceil(Math.random()* 150) + 1;
    let requestString=` https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    let data= await fetch(requestString)//fetch pour faire une requete en javascript
   
    //console.log(data);
    let response =await data.json();
    console.log(response);
    image.src = response.sprites.front_default;//en va changer 
    //l'attribut src(source)
    //de l'image avec ce que se trouve dans l'url de l'image 
    pokeNumber.textContent=`#${response.id}`;
    pokeName.textContent=response.name;
};
changePokemon();
button.addEventListener("click",changePokemon );