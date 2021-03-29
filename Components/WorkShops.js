import React from 'react';
import {Link} from 'react-router-dom';
import { Eventhandler } from './GeneralMeeting';
import  FrenchImg from '../pictures/event/french_workshop.jpg'
import  JapanImg from '../pictures/event/1200px-Flag_of_Japan.svg.png'
import  KoreaImg from '../pictures/event/Flag-South-Korea.jpg'
import  RussiaImg from '../pictures/event/russian-flag.jpg'
import  SpainImg from '../pictures/event/1200px-Flag_of_Spain.svg.png'
import './Workshop.css';

const WorkshopLists = [
    {
        name: "French",
        link: "FrenchWorkShop",
        img: FrenchImg
    },
    {
        name: "Japanese",
        link: "JapaneseWorkShop",
        img: JapanImg
    },
    {
        name: "Korean",
        link: "KoreanWorkShop",
        img: KoreaImg
    },
    {
        name: "Russian",
        link: "RussianWorkShop",
        img: RussiaImg
    },
    {
        name: "Spanish",
        link: "SpanishWorkShop",
        img: SpainImg
    }
];

const WorkshopHander = WorkshopLists.map((WorkshopList) => {
    return (
        <li className="workshop_list">
            <Link to={`/${WorkshopList.link}`}>
            <img className="workshop_img"   src={WorkshopList.img} />
            <p>{WorkshopList.name}</p>
            </Link>
        </li>
    )
});

const WorkShops =()=> {
    return (
        <div class="main">
            {Eventhandler[1]}
            <ul className="workshops">
                {WorkshopHander}
            </ul>
        </div>
    )
};

export default WorkShops;