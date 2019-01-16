import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import seed from './Seed';
import SideDrawer from './components/SideDrawer/SideDrawer';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';

class App extends Component {

  tileData = seed;

  state = {
    sidebarSwitch : false,
    display : 0,
  }

  switchDrawerHandler = (switchState) => {
    this.setState(prevState => {
      let result = null;
      if(switchState == null) {
        result = !prevState.sidebarSwitch;
      } else {
        result = switchState;
      }
      return { sidebarSwitch : result };
    });
  }

  switchPageHandler = (switchPageIndex) => {
    this.setState({display : switchPageIndex});
  }

  

  render() { 

    let page = null;

    if( this.state.display === 0 ) {
      page = <HomePage />;
    } else if(this.state.display === 1) {
      page = <Main data={this.tileData} />;
    } else if(this.state.display === 2) {
      page = <AboutUs />
    } else {
      page = (<h1>Apna Time Aayega</h1>)
    }
    return (
      <div>
        <Header data={this.state} switchDrawerHandler={this.switchDrawerHandler} />
        <SideDrawer data={this.state} switchDrawerHandler={this.switchDrawerHandler} switchPageHandler={this.switchPageHandler} />
        {page}
      </div>
    );
  }
}

export default App;
