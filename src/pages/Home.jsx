import SearchForm from "../components/searchForm";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Pokémon Search</h1>
      <SearchForm />
      <Link to="/pokedex" style={{textDecoration:"none", color:"inherit"}}>
    <button style={{margin: "20px" }}>
    Vai al Pokédex
      </button>
    </Link>

    </div>
  );
}

export default Home;
