import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
class App extends Component {

  tileData = {
    events: {
      data: [
        {
          eventName: "Some Workshop",
          eventImg: "https://img.rwgenting.com/rwgenting/uploadedImages/Images/Casino/Highlights/Earn_and_Buy_Promotion/AOS-banner.jpg?n=211"
        },
        {
          eventName: "Some Coding Contest",
          eventImg: "https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"
        },
        {
          eventName: "Some Coding Contest",
          eventImg: "https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"
        },
        {
          eventName: "Some Coding Contest",
          eventImg: "https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"
        },
        {
          eventName: "Some Coding Contest",
          eventImg: "https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"
        },
        {
          eventName: "Some Coding Contest",
          eventImg: "https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"
        },
        {
          eventName: "Some Coding Contest",
          eventImg: "https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"
        },
        {
          eventName: "Some Coding Contest",
          eventImg: "https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"
        }
      ]
    },
    member: {
      yearWiseMembers: [
        [
          {
            name: "Vaibhav Sahu",
            img: "SomeImg.img"
          }, 
          {
            name: "Manas Garg",
            img: "some.img"
          }
        ],
        [
          {
            name: "atul bisht",
            img: "Someimg.img"
          }
        ],
        [
          {
            name: "Someone",
            img: "someone.img"
          }
        ]

      ],

    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main data={this.tileData} />
      </div>
    );
  }
}

export default App;
