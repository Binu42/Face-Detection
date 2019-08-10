import React, {Component} from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Logo from '../../components/Logo/Logo';
import ImageLinkForm from '../../components/imageLinkForm/imageLinkForm';
import UserDetails from '../../components/UserDetails/UserDetails';
import Particles from 'react-particles-js';
import ParticlesOptions from '../../components/Particles/Particles';
import Footer from '../../components/Footer/Footer';
import '../css/App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event)
  }

  render() {
    return (
      <div className="App">
        <Particles params={ParticlesOptions} className='particles'/>
        <Navigation/>
        <Logo/>
        <UserDetails/>
        <ImageLinkForm onInputChange={this.onInputChange}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
