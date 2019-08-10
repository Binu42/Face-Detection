import React, {Component} from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Logo from '../../components/Logo/Logo';
import ImageLinkForm from '../../components/imageLinkForm/imageLinkForm';
import UserDetails from '../../components/UserDetails/UserDetails';
import Particles from 'react-particles-js';
import ParticlesOptions from '../../components/Particles/Particles';
import Footer from '../../components/Footer/Footer';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import '../css/App.css';

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_faceApiKey
 });

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: ''
    }
  }
  
  calculateFaceLocationBox = (data) => {
    // Image selection
    const image = document.getElementById('input-image');
    // image width and height
    const width = image.width;
    const height = image.height;

    // creating empty co-ordinates and pushing it by actual co-ordinates using simple maths
    var leftCol = [], rightCol = [], topRow = [], bottomRow = [];
    for(var i=0; i<data.length; i++){
      leftCol.push(data[i].region_info.bounding_box.left_col * width);
      rightCol.push(width - data[i].region_info.bounding_box.right_col  * width);
      topRow.push(data[i].region_info.bounding_box.top_row * height);
      bottomRow.push(height - data[i].region_info.bounding_box.bottom_row * height);
    }
    return {
      leftCol: leftCol,
      rightCol: rightCol,
      bottomRow: bottomRow,
      topRow: topRow
    }
  } 

  displayFacebox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    // setting image url of image
    this.setState({input: event.target.value, imageUrl: event.target.value});
  }
  

  // Detacting faces in image on button click
  onButtonClick = (event) => {
    // clarifai code for faces detection 
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFacebox(this.calculateFaceLocationBox(response.outputs[0].data.regions))  // [0].region_info.bounding_box
    .catch(error => console.log(error)) 
  );
  }

  render() {
    return (
      <div className="App">
        <Particles params={ParticlesOptions} className='particles'/>
        <Navigation/>
        <Logo/>
        <UserDetails/>
        <ImageLinkForm
        onInputChange={this.onInputChange}
        onButtonClick={this.onButtonClick}
        />
        <FaceRecognition boxes={this.state.box} imageUrl={this.state.imageUrl}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
