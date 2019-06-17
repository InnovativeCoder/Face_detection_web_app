import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Naviagation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';

const particlesOptions = {
  particles: {
    number:{
      value: 80,
      density: {
        enable : true,
        value_area: 800
      }
    },
    move: {
      speed: 3,
    }
  }
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '', 
      route: 'signin',
      isSignedIn: false

    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }
 
  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({isSignedIn: false});
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
  }

  render(){
  return (
    <div className="App">
      <Particles className='particles'
      params = {particlesOptions}
      />
      <Navigation isSinedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      { this.state.route === 'home'
      ? <div><Logo />
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}
      />
        {/* <FaceRecognition /> */}
      </div>
      : (
        this.state.route === 'signin'
      ? <SignIn onRouteChange={this.onRouteChange}/> 
      :<Register onRouteChange={this.onRouteChange} />
      )
      }
    </div>
  );
}
}

export default App;
