import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import { Greeting } from './calc';
function App() {
  return (
    <div className="App">
      <h1> hello </h1>
      <Footer />
      <Greeting text="ok"/>
    </div>
  );
}

export default App;
