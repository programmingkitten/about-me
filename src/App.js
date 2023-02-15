import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import { Greeting } from './calc';
import GameList from './components/games';
const data = {
  'game1': {'name': "First game", 'rating': "10/10"}
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
