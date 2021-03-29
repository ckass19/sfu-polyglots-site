import React from 'react';
import { Link } from 'react-router-dom';

const footer= ({BarNames})=>{
    const Footer = BarNames.map((BarName)=>{
        return 	<li className='footer-link'><Link to={`/${BarName.link}`}>{BarName.name}</Link></li>
    });
    return (
         <div className="footer">
            <div className="footer-list">
 				<ul>
                    {Footer}
 				</ul>
 			</div>
 			<div className="footer-logo">Copyright &copy; 2020 SFU Polyglots</div>
		</div>
    );
};
export default footer;
