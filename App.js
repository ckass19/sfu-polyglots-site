
import './App.css';
import React, { Component, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/header';
import Body from './Components/body';
import Footer from './Components/footer';
import Events from './Components/Event';
import About from './Components/About';
import Blog from './Components/Blog';
import Join from './Components/Join';
import GeneralMeeting from './Components/GeneralMeeting';
import MovieNight from './Components/MovieNight';
import WorkShops from './Components/WorkShops';
import Contact from './Components/Contact';
import FrenchWorkShop from './Components/Workshops/FrenchWorkShop';
import JapaneseWorkShop from './Components/Workshops/JapaneseWorkShop';
import KoreanWorkShop from './Components/Workshops/KoreanWorkShop';
import RussianWorkShop from './Components/Workshops/RussianWorkShop';
import SpanishWorkShop from './Components/Workshops/SpanishWorkShop';
import NavigationBarNames from './Components/NavigationBarNames.json';

const WorkshopsLink = [FrenchWorkShop, JapaneseWorkShop, KoreanWorkShop, RussianWorkShop , SpanishWorkShop]

const XX = NavigationBarNames[4].supersub.map((NA,index)=>{
	const XXX = NavigationBarNames[4].superCompo.map((AA,index)=>{
		AA = WorkshopsLink[index]
		return <Route path={`/${NA}`} exact component={AA}/>

	})
	return [XXX[index]]
	
});
const App= () =>{
  return (
    <div className="App">
      <Router>
        <Header NavigationBarNames={NavigationBarNames}/>
		<Route  path={`/${NavigationBarNames[4]['link']}`}  exact component={Events}/>
		<Route  path={`/${NavigationBarNames[3]['link']}`}  exact component={About}/>
		<Route  path={`/${NavigationBarNames[5]['link']}`}  exact component={Join}/>
		<Route path="/GeneralMeeting"  exact component={GeneralMeeting} />
        <Route path="/WorkShops" exact component={WorkShops} />
        <Route path="/MovieNight"  exact component={MovieNight} />
		<Route path="/Contact"  exact component={Contact} />
		{XX}
	  	<Footer BarNames={NavigationBarNames}/>
	  </Router>
    </div>
  )
}
export default App;