import React from 'react';
import { Link } from 'react-router-dom';
function body(){
    return (
        <>
            <div className="main">
			    <div className="container">
				    <h1>Welcome to SFU Polyglots Club</h1>
				    <Link href="join.html" class="btn join">JOIN US</Link>
			    </div>	
		    </div>
        </>
    );
}
export default body;
