import {useState,useEffect} from 'react'
import './index.css'

function App() {
  
  const [pokemon,setPokemon] = useState(null)
  const [myClass,setMyClasse] = useState("newpkmn")

  useEffect(()=>{
    fetchPokemons(1)
  },[]
  )

  const dispation = () =>{
    setMyClasse("oldpkmn")
  } 

  useEffect(()=>{
    setMyClasse("newpkmn")
  },[pokemon])

  useEffect(()=>{
    const changePokemon = () =>{
      const randomID = Math.floor(Math.random()*151)+1
      fetchPokemons(randomID)
    }
   if(myClass==='oldpkmn')
   {
   setTimeout(()=>{changePokemon()},900)
  }
  },[myClass])


  const fetchPokemons = async (ID) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
    const data = await response.json()
    setPokemon(data)
  }

  return (
    <div className="App">
      <h1>C<span>a</span>tch th<span>e</span>m <span>a</span>ll</h1>
      {pokemon !== null &&
      <section>
         <img src={pokemon.sprites.front_default} alt={pokemon.name} className={myClass} />
         <h2 className={myClass}>{pokemon.name}</h2>
         <p >height: <span className={myClass}>{pokemon.height}</span></p>
         <p >Weight: <span className={myClass}>{pokemon.weight}</span></p>
         <p>
          Types:
         <ul >
          {pokemon.types.map((type)=>{
           return <li key={type.slot} className={myClass}>{type.type.name}</li>
          })}
         </ul>
         </p>
      </section>
      }
      <button onClick={dispation}>show random Pokémon</button>
    </div>
  );
}

export default App;
