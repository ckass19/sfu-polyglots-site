import React from 'react';


const eventInfo = [ 
    {
        name: "General Meeting",
        header: "Join our weekly meetings!!!",
        header2:" In our weekly zoom meetings, we play fun activites related to languages and cultures!!",
        schedule: "Every Friday 8:30-9:30pm pst"
    },
    {
        name: "Workshops",
        header: "Join our language workshops",
        header2: "",
        schedule: "Every Friday 8:30-9:30pm pst"
    },
    {
        name: "Movie Night",
        header: "Join our Movie night",
        header2:"",
        schedule: "Every Friday 8:30-9:30pm pst"
    }
]

export const Eventhandler = eventInfo.map((event)=>{
    return (
        <div className="container">
        <div>
            <h1>{event.name}</h1>
        </div>
        <ul> 
            <li>
                <h2>{event.header}</h2>
            </li>
            <li>
                <h3>{event.header2}</h3>
            </li>
            <li>
                <h3>{event.schedule}</h3>
            </li>
            <li className="zoom_link" id="zoom_general_link">
                <a href="https://sfu.zoom.us/j/68491643333?pwd=M0JXODh5cU5SVTJMdnIxNW9KWG5LQT09">
                   Click Here
                </a>
            </li>
        </ul>
        </div>
    )
});

const GeneralMeeting = ()=>{
    return(
        <div className="main">
               {Eventhandler[0]}
        </div>
    );
};
export default GeneralMeeting;

