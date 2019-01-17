import React, { Component } from 'react';
import seed from '../../Seed';

class profile extends Component {
	render() {
		var imageStyle={
		height:60,
		wideth:60,
	};
    return (
    	
      <div>
        
        <br/>
        <div className='row'>
        <div className='col m4,col s12,col l4'>
        <center>
        <img src={seed.profile.image} alt='something' style={imageStyle}/>
        </center>
        </div>
        <div className='col m8,col s12,col l8'>
        <center><h1>About:</h1></center><br/>
        <p>{seed.profile.about}</p>
        </div>
      </div>
      </div>
      );
}
}
export default profile;