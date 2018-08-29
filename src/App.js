import React, { Component } from 'react';

import './App.css';

import * as firebase from "firebase";
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';



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

  render() {
    return (
      <div className="App">

         <h1>Bloc Chat</h1>
          <RoomList firebase = {firebase} />
          <h1>Messages</h1>
          <MessageList firebase = {firebase}/>


      </div>

    );
  }
}

export default App;
