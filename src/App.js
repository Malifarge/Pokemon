import {useState,useEffect} from 'react'
import './index.css'

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

  console.log(pokemon);

  return (
    <div className="App">
      <h1>C<span>a</span>tch th<span>e</span>m <span>a</span>ll</h1>
      {pokemon !== null &&
      <section>
         <img src={pokemon.sprites.front_default} alt={pokemon.name} />
         <h2>{pokemon.name}</h2>
         <p>height: {pokemon.height}</p>
         <p>Weight: {pokemon.weight}</p>
         <p>
          Types:
         <ul>
          {pokemon.types.map((type)=>{
           return <li key={type.slot}>{type.type.name}</li>
          })}
         </ul>
         </p>
      </section>
      }
      <button onClick={() => fetchPokemons(Math.floor(Math.random()*151)+1)}>show random Pokémon</button>
    </div>
  );
}

export default App;
