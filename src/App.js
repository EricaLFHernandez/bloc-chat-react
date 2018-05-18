import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';

var config = {
    apiKey: "AIzaSyCC_HQsHrkW9AgPo7ejtIkpVRHayVo9_Uw",
    authDomain: "bloc-chat-react-be2df.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-be2df.firebaseio.com",
    projectId: "bloc-chat-react-be2df",
    storageBucket: "bloc-chat-react-be2df.appspot.com",
    messagingSenderId: "586184498276"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
