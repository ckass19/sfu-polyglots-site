import React, {Component} from 'react';
import {BrowserRouter,Link, Router,Route } from 'react-router-dom';
import generalmeeting from '../pictures/event/meeting_no_swirl.png'
import Workshop from '../pictures/event/workshop_no_swirl.png'
import Movienight from '../pictures/event/movie night_no_swirl.png'
import './Event.css'
import GeneralMeeting from './GeneralMeeting';
import Workshops from './WorkShops';
import MovieNight from './MovieNight';
const EventDetails = [
    {
      Eventname: "General Meeting",
      Picture: generalmeeting,
      link: "GeneralMeeting"
    },
    {
      Eventname: "Workshop",
      Picture: Workshop,
      link: "WorkShops"
    }
    ,
    {
      Eventname: "Movie Night",
      Picture: Movienight,
      link: "MovieNight"
    }
  ]
const eventlists = EventDetails.map((EventDetail) => {
    return (
        <a href="events/general_meeting.html">
            <li className="general_meeting">
                <Link to={`/${EventDetail.link}`} >
                  <img src={EventDetail.Picture} className="general_meeting_image"/>
                  <p>{EventDetail.Eventname}</p> 
                </Link>
            </li>
        </a>
    );
    });
const EventHandler= () =>{
    return(
        <div>
            <div className='main event'>
              <div className='container'>    
                <div>
				        <h1>Our Events</h1>
			          </div>
			        <div className="broad_event_lists">
                <ul>
                    {eventlists}
				        </ul>
			        </div>
              </div>    
            </div>
        </div>
);
}
const Events = () => {
  return (
    <div>
        <EventHandler />
    </div>
  )
}



export default Events;