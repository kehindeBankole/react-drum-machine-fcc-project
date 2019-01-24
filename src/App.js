import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const bankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keycode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];



class Drum extends Component{
 componentDidMount(){
document.addEventListener("keydown" , this.handlekeyclick)
 }
componentWillUnmount(){
document.removeEventListener("keydown" , this.handlekeyclick)
}
handlekeyclick = e =>
{
  if(e.keyCode == this.props.keyTrigger.charCodeAt()){
  this.audio.play()
  this.audio.currentTime=0;
  this.props.handledisplay(this.props.id)
}
}



  handleClick = () => {
    this.audio.play()
    this.audio.currentTime=0;
    this.props.handledisplay(this.props.id)
  }
  render(){
    return(
      <div className="drum-pad" onClick={this.handleClick}  id={this.props.keyTrigger}>
    {this.props.keyTrigger}
     <audio ref={ref => this.audio = ref} className="clip" id={this.props.keyTrigger} src={this.props.url}>

     </audio>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      display:""
    }
   
  }
handledisplay=(display)=>this.setState({display})
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        <div id="drum-machine">
        
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">
        {bankOne.map((d)=>
          <Drum
          id={d.id}
         keyTrigger={d.keyTrigger}
          url={d.url}
          handledisplay={this.handledisplay}
          />)}
        
        </div>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
