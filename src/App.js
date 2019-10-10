import React from 'react';
import './App.css';
import Contact from './components/Contact.js';
import './components/Contact.css';



function App() {
  return (
    <div className="App">
      <Contact 
       name='Arnold Horton' 
       avatar='https://randomuser.me/api/portraits/men/82.jpg'
       online
      />
      <Contact 
       name='Krin Burke' 
       avatar='https://randomuser.me/api/portraits/women/84.jpg'
      />
      <Contact 
       name='Landon Wells' 
       avatar='https://randomuser.me/api/portraits/men/0.jpg'
       online
      />
    </div>
  );
}

export default App;
