import {useState,useEffect} from 'react'

function App() {
  
  const [pokemon,setPokemon] = useState(null)

  useEffect(()=>{
    fetchPokemons(1)
  },[]
  )

  useEffect(()=>{
    pokemon!== null && console.log(pokemon.name);
  },[pokemon])

  const fetchPokemons = async (ID) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
    const data = await response.json()
    setPokemon(data)
  }

  return (
    <div className="App">
      <section>
        <img src={pokemon!== null && pokemon.image} alt={pokemon!== null ? pokemon.name : "pokemon"} />
      </section>
    </div>
  );
}

export default App;
