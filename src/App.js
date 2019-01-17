import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import seed from './Seed';
import SideDrawer from './components/SideDrawer/SideDrawer';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Profile from './components/Profiles/profile';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  tileData = seed;

  state = {
    sidebarSwitch: false,
  }

  switchDrawerHandler = (switchState) => {
    this.setState(prevState => {
      let result = null;
      if (switchState == null) {
        result = !prevState.sidebarSwitch;
      } else {
        result = switchState;
      }
      return { sidebarSwitch: result };
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header data={this.state} switchDrawerHandler={this.switchDrawerHandler} />
          <SideDrawer data={this.state} switchDrawerHandler={this.switchDrawerHandler} />
          <Route path='/' exact component={HomePage} />
          <Route path='/explore' exact render={() => <Main data={this.tileData} />} />
          <Route path='/aboutus' exact component={AboutUs} />
          <Route path='/profile/:id' exact component={Profile} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
