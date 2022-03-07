import './App.css';
import MyHeader from './header.js'
import MyFooter from './footer.js'
import User from './Log_in'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Log_in from "./Log_in";

const aboutMe = { name : "Matt", linkedIn : "https://linkedin.com/in/mattkbrat"}

function App() {
  return (
    <div className="App">
      <MyHeader about={aboutMe}/>
        <body>
        <Log_in/>
        </body>
      <MyFooter myName={aboutMe.name} />
    </div>
  );
}

export default App;
