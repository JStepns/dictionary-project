import logo from './images/logo.png';
import './App.css';
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="Container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <h1>Dictionary</h1>
      </header>
      <main>
        <SearchForm defaultSearchWord="blue"/>
      </main>
      <footer>Coded by Jacqueline Stephens, open-sourced on <a href="https://github.com/JStepns/dictionary-project" target="_blank" rel="noreferrer">Github</a> and hosted on Netlify</footer>
      </div>
    </div>
  );
}

export default App;
