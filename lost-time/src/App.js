import logo from './logo_lost-time.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="info">Tell us more about you</Button>{' '}
      </header>
      <footer>
        <p>Made with love by <i>Halil BAGDADI</i>, <i>Julien CALENGE</i> et <i>Clement GERINIERE</i></p>
      </footer>
    </div>
  );
}

export default App;
