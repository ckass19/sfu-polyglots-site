import React from 'react';
import formdetails from '../data.json'
const FormFrame = (props) => {
    return (
            <li>
                <label>{props.name}</label>
                <small>{props.warning}</small>
                {props.inside}
            </li>
            )
};

export default FormFrame;