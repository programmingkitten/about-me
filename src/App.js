import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import { Greeting } from './calc';
import { Timer } from './components/timer';
import Clicker from './components/clicker';
import Characters from './components/characters';
import Register from './components/register';
import AddGame from './components/addGame';
import GamesList from './components/gamesList';
const data = {
  'game1': {'name': "Minecraft", 'rating': "10/10"},
  'game2': {'name': "League of legends", 'rating': "10/10"},
  'game3': {'name': "WoW", 'rating': "10/10"},
  'game4': {'name': "CS:GO", 'rating': "10/10"},
  'game5': {'name': "Brawl Stars", 'rating': "10/10"},
  'game6': {'name': "Terraria", 'rating': "10/10"}
}

function App() {
  return (
    <div className="App">
      <h1> hello </h1>
      <Register></Register>

      <Greeting text="ok"/>
      <Clicker></Clicker>
      <Characters/>
      <Footer />
      <AddGame/>
      <GamesList></GamesList>

    </div>
  );
}

export default App;
