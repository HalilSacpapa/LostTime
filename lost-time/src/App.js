import logo from './logo_lost-time.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import React from 'react';
import Dropzone from 'react-dropzone'

function currDate() {
  var d = new Date();
  var fullDate = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
  return (fullDate);
}

function downloadBlobAsFile(data, filename) {
  var blob = new Blob([data], {type: data.type})
  var e = document.createEvent('MouseEvents')
  var a = document.createElement('a')
  a.download = filename
  a.href = window.URL.createObjectURL(blob)
  a.dataset.downloadurl =  [data.type, a.download, a.href].join(':')
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  a.dispatchEvent(e)
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
      console.log(img);
      var imgName = "img-" + currDate();
      downloadBlobAsFile(img, imgName);
    }
  };

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
          <div>
            <img src={this.state.image} />
            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
        </header>
        <footer className="App-footer">
          <p>Made with love by <i>Halil BAGDADI</i>, <i>Julien CALENGE</i> and <i>Clement GERINIERE</i></p>
        </footer>
      </div>
    );
  }
}

export default App;