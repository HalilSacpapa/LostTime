import logo from './logo_lost-time.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome to Lost Time !
        </h2>
        <small><i>An app powered in ReactJS and serverised in python.</i></small>
      </header>
      <footer>
        <p>Made with love by <i>Halil BAGDADI</i>, <i>Julien CALENGE</i> et <i>Clement GERINIERE</i></p>
      </footer>
    </div>
  );
}

export default App;
