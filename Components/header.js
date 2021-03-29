import React from 'react';
import { BrowserRouter, Link,Route } from 'react-router-dom';
import discord_icon from '../pictures/sns_icons/icons8-discord-48.png';
import instagram_icon from '../pictures/sns_icons/icons8-instagram-48.png';
import twitter_icon from '../pictures/sns_icons/icons8-twitter-48.png';
import facebook_icon from '../pictures/sns_icons/icons8-facebook-48.png';
import {show,hide} from '../Function';
const Socialmeidas = [
	{ 
		 url: "https://discord.com/invite/nwvewRsCpC",
		 src: discord_icon,
	 	alt:"Discord"
	},
	{ 
		url: "https://www.instagram.com/sfu.polyglots_/",
		src: instagram_icon,
		alt:"Instagram"
	},
	{ 
		url: "https://twitter.com/SFUpolyglots_",
		src: twitter_icon,
		alt:"Twitter"
	   },
	{ 
		url: "https://www.facebook.com/SFU-Polyglots-101958235110152",
		src: facebook_icon,
		alt:"Facebook"
	}
]
const Header =({NavigationBarNames}) => {
	const SNSLink = Socialmeidas.map((Socialmeida)=>{
		return (
			<li className="media-link">
				<a href={Socialmeida.url}>
				<img src={Socialmeida.src} alt={Socialmeida.alt} class="fadeImg"/>
				</a>
			</li>
		)
	});
	const NavigationBar = NavigationBarNames.map((Name)=>{
		if (Name.name === 'EVENT'){
			const DropBar = Name.subname.map((Sub)=>{
				if (Sub === 'WorkShops'){
					const DropBar3 = Name.supersub.map((SP)=>{
						return (
							<li>
								 <Link to={`/${SP}`}>{SP}</Link>
							</li>
						)
					})
					return (
						<li className="Workshop"
							onMouseOver={()=>{document.getElementById('Workshop_list').style.display ='block'}} 
							onmMuseOut={()=>{document.getElementById('WOrkshkop_list').style.display ='none'}}>
							<Link to={`/${Sub}`}>{Sub}</Link>
							<ul id="Workshop_list">
								{DropBar3}
							</ul>
						</li>
					)
				}
					else{
						return <li><Link to={`/${Sub}`}>{Sub}</Link></li>
					}
			});
			return (
				<li 
					className="header-list Event"  
					onMouseOver={()=>{document.getElementById('event_list').style.display ='block'}} 
					onMouseOut={()=>{document.getElementById('event_list').style.display = 'none'}}>
					<Link to={`/${Name.link}`}>{Name.name}</Link>
					<ul id="event_list" >
						{DropBar}
					</ul>
				</li>
			)
		} else if(Name.name === 'JOIN US'){
			const DropBar2 = Name.subname.map((Sub)=>{
				return <li><Link to={`/${Sub}`}>{Sub}</Link></li>
			});
			return (
			<li 
				className="header-list JoinUs"
				onMouseOver={()=>{document.getElementById('join_list').style.display ='block'}} 
				onMouseOut={()=>{document.getElementById('join_list').style.display = 'none'}}>
				<Link to={`/${Name.link}`}>{Name.name}</Link>
					<ul id="join_list">
						{DropBar2}
					</ul>
			</li>
			)
		}
		else {
			return (
				<li className="header-list"><Link to={`/${Name.link}`}>{Name.name}</Link></li>
			)
	}});

	
    return (
        <div className="header">
			<div className="left-header">
				<p>SFU POLYGLOTS</p>
			</div>
			<div className="right-header">
            	 <ul className="right-nav">
				    {NavigationBar}
                </ul>
                <ul className="right-icons">
				   {SNSLink}
			    </ul>
			</div>
        </div>
    );
}
export default Header;