let pokemonApi = poke
async function getData() {
  try {
    const pokemonName = document.getElementById("pokemonNameId").value
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    console.log(response)
    document.getElementById("ability").innerHTML = "Ability : " + response.data.abilities[0].ability.name

    const imageElement = document.getElementById("image")
    // const pokemonImage = response.data.sprites.front_default;

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    imageElement.style.display = "block"

    const pokemonLooks = [response.data.sprites.front_default, response.data.sprites.front_shiny, response.data.sprites.back_default]

    const processArray = async () => {
      for (const look of pokemonLooks) {
        imageElement.src = look

        await sleep(1000);
      }
    };
    processArray()
    
  }

  catch (error) {
    console.log(`this is error:` + error)
  }

}

async function frontLook (){
  imageElement.src = apiResponse.data.sprites.front_default
}






