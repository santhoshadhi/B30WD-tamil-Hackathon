document.body.style.backgroundImage= "url('https://static.planetminecraft.com/files/resource_media/screenshot/1146/2011-11-19_002139_848779.jpg')"
document.body.style.backgroundSize="cover"

let division = document.createElement('div');
division.setAttribute('id', 'main')
division.classList.add("container");



let img = document.createElement('div');
img.setAttribute('id', 'img');




let button = document.createElement('button');
button.innerHTML = "Display Pokemon";
button.addEventListener('click',pokedata);

document.body.append(division, img,button );




async function pokedata() {
    try {
      let pok = Math.floor((Math.random() * 50) + 1);
          let url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pok}`);
        let res = await url.json(); 
      document.getElementById('img').innerHTML = `<img width=200 height=200 src='  ${res.sprites.front_default}' > <br> 
                                                  This Pokemon name is ${res.name}<br>
                                                  Weight is ${res.weight}<br> 
                                                  Abilities :${res.abilities[0].ability.name}<br>
                                                  Moves:${res.moves[0].move.name}`
  
      } catch (e) {
          console.log(e)
      }
  }
  
  
  