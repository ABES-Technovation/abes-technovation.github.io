import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css'
import {Route,Router,browserHistory} from 'react-router'
import Profile from './components/Profiles/profile'
import AboutUs from './components/AboutUs/AboutUs'
import HomePage from './components/HomePage/HomePage'

class ReactRoute extends React.Component{
	render() {
    return (
    	<Router history={browserHistory}>
    	<Route path={"about"}  component={AboutUs}/>
        <Route path={"explore"}  component={App}/>
        <Route path={"/"}  component={HomePage}/>
        <Route path={"profile/:id"}  component={Profile}/>
      </Router>
      );
  }
}

ReactDOM.render(<ReactRoute />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
