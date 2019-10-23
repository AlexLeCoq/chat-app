import React from 'react';
import './App.css';
import Contact from './components/Contact.js';
import './components/Contact.css';
import ContactList from './components/ContactList.js'



function App() {
  return (
    <div className="App">
      <Contact 
       name='Arnold Horton' 
       avatar='https://randomuser.me/api/portraits/men/82.jpg'
       online
      />
      <Contact 
       name='Christine Burke' 
       avatar='https://randomuser.me/api/portraits/women/84.jpg'
      />
      <Contact 
       name='Didier Moustache' 
       avatar='https://randomuser.me/api/portraits/men/0.jpg'
       online
      />
      <ContactList/>
    </div>
  );
}

export default App;
