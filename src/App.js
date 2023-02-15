import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import { Greeting } from './calc';
import GameList from './components/games';
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
      <Footer />
      <Greeting text="ok"/>
      <GameList games={data}></GameList>
    </div>
  );
}

export default App;
