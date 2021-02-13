import logo from './logo_lost-time.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import React from 'react';
import Dropzone from 'react-dropzone'

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
          <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({getRootProps, getInputProps}) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Button variant="info">Upload your daily picture</Button>{' '}
                </div>
              </section>
            )}
          </Dropzone>
        </header>
        <footer className="App-footer">
          <p>Made with love by <i>Halil BAGDADI</i>, <i>Julien CALENGE</i> and <i>Clement GERINIERE</i></p>
        </footer>
      </div>
    );
  }
}

export default App;
