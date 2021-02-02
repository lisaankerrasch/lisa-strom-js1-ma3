const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const gamesContainer = document.querySelector(".container");
const loader = document.querySelector(".loader");

async function getGames() {
  try {
    const response = await fetch(url);
    const list = await response.json();
    const game = list.results;

    setTimeout(function () {
      gamesContainer.innerHTML = "";

      for (let i = 0; i < game.length; i++) {
        if (i === 8) {
          break;
        }

        gamesContainer.innerHTML += `<div class="games"><p class="name"> 
    ${game[i].name} <p>
    <p class="rating"> Rating: ${game[i].rating} </p>
    <p> Number of tags: ${game[i].tags.length} </p> </div>`;
      }
    }, 2000);
  } catch (error) {
    setTimeout(function () {
      loader.classList.remove("loader");
      gamesContainer.innerHTML += `<div class="error"> There has been an error </div>`;
    }, 2500);
  }
}

getGames();
