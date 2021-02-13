import logo from './logo_lost-time.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import React from 'react';
import ImageUploader from 'react-images-upload';

function date() {
  var d = new Date();
  var fullDate = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
  // console.log(fullDate);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button variant="info">Tell us more about you</Button>{' '}
          <ImageUploader
            withIcon={false}
            buttonText='Upload your daily picture'
            onChange={this.onDrop}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={5242880}
          />
        </header>
        <footer className="App-footer">
          <p>Made with love by <i>Halil BAGDADI</i>, <i>Julien CALENGE</i> and <i>Clement GERINIERE</i></p>
        </footer>
      </div>
    );
  }
}

export default App;
