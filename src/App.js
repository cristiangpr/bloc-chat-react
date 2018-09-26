import React, { Component } from 'react';

import './App.css';

import * as firebase from "firebase";
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';



  // Initialize Firebase
  var config = {
     apiKey: "AIzaSyBLKSAOTvmbLv-h9vCmlzUijYRvVkEX19Q",
     authDomain: "bloc-chat-react-e1eae.firebaseapp.com",
     databaseURL: "https://bloc-chat-react-e1eae.firebaseio.com",
     projectId: "bloc-chat-react-e1eae",
     storageBucket: "bloc-chat-react-e1eae.appspot.com",
     messagingSenderId: "961261880155"
   };
   firebase.initializeApp(config);


class App extends Component {
  constructor(props){
    super(props);

this.setActiveRoom = this.setActiveRoom.bind(this);
this.setUser = this.setUser.bind(this);

    this.state = {
      activeRoom: " ",
      user: {displayName: "Guest"}
    }
  }

 setUser(user){
    this.setState({user: user});
    console.log(this.state.user);
 }

  setActiveRoom(room) {
        this.setState({ activeRoom: room });
        console.log(this.state.activeRoom);
}

  render() {
    return (
      <div className="App">

         <h1>Bloc Chat</h1>
          <RoomList firebase = {firebase} action = {this.setActiveRoom} />
          <h1>Messages</h1>

          <MessageList firebase = {firebase} value = {this.state.activeRoom.key} user= {this.state.user}/>
          <h1>Authentication</h1>
          <User firebase = {firebase} setUser = {this.setUser} user = {this.state.user}/>


      </div>

    );
  }
}

export default App
