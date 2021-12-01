import './App.css';
import React,{useEffect,useState} from 'react';
import Recipe from './Receipe';

const App = () =>{
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] =useState('');
  const [query,setQuery] = useState('chicken');

  const APP_ID ="2e6793a6";
  const APP_KEY = "3918785f7a9f8d53e00968502bdc882c";
  useEffect(()=>{
    getRequest();
  },[query]);

  const getRequest = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e) =>{
    setSearch(e.target.value);
    console.log(e.target.value);

  }
  const updateQuery = (e)=>{
    e.preventDefault();
    setQuery(search);
  } 

   return(
    
    <div className="App">
    <form className="search_form" onSubmit={updateQuery}>
      <input type="text" className="seach_bar" value={search} onChange={updateSearch}/>
      <button type="submit">Search</button>
    </form>
    <div className="recipes">
    {recipes.map((recipe)=>
    (<Recipe title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />))
    }
    </div>
    </div>
    
  );
}
export default App;