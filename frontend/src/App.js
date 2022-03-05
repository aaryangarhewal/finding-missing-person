import React from 'react';
import { Route } from 'react-router-dom';
import DashboardComponent from './dashboard/dashboard';
import AboutComponent from './MyComponents/About';
import ContactUsComponent from './MyComponents/ContactUs';
import Missregister from './missingregister/missregister';
import tohelp from './tohelp/tohelp';
import './App.css';

class App extends React.Component {

  render() {
    return(
      <React.Fragment>
        <main className = "app-container">
          <Route exact path='/' component={DashboardComponent}></Route>
          <Route path = '/dashboard' component={DashboardComponent}></Route>
          <Route path = '/About' component={AboutComponent}></Route>
          <Route path = '/ContactUs' component={ContactUsComponent}></Route>
          <Route path = '/MissingRegister' component={Missregister}></Route>
          <Route path = '/WantToHelp' component={tohelp}></Route>
        </main>
      </React.Fragment>
    );
  }

  
}

export default App;
