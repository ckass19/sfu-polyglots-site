import React, { useEffect, useState } from 'react';
import './Join.css';
import {IdValidation,EmailValidation,StudyHandler} from '../Function';
import formdetails from './data.json';
import Programs from './Program.json';
import FormFrame from './Smalls/FormFrame';

const YearOfStudy = ['1 year' ,'2 year','3 year','4 year',  '4+ year','Graduate student', ' Not a student' ] 

const HowHearUS =  ['SNS','SFU website','Friends','Others']




const RegistrationInfo = formdetails.map((formdetail,index) => {
    if (formdetail.labelname === "Program of Study"){
        const ShowProgram = Programs.map((program) => {
            return(
    			<option id="GG" name={program.id} value={program.department}>{program.department}</option>
            )
        })
        const MajorHandler = Programs.map((program)=> {
            const P =program.majors.map((major) =>{
            return(<option name='ED' value={major}>{major}</option>
            )});
            return(
                <li >
                <label  className="Major " id = 'Major_label'>Pick your major/minor</label>
                <select id={program.id}>
                   {P}
                </select>
                </li>
            )
            });
        const Inside = () => { 
            return (
                <select id="how_know">
                <optgroup label="">
                <option disabled selected>Choose Your Faculty</option>
                </optgroup>	
                {ShowProgram} 
                </select>
            )
        };
        return(
            <FormFrame name={formdetail.labelname} warning={formdetail.warning} inside={Inside()} >
            </FormFrame>
        )
    }
    else if (formdetail.labelname === 'Year of study') {
        const StudyYearHandler = YearOfStudy.map((Year) =>{
             return <option value={Year}>{Year}</option>
        });
        return(
            <li>
            <label>{formdetail.labelname}<span>*</span></label>
            <select id="cars">
                <optgroup label="">
                    <option disabled selected >Choose your year</option>
                </optgroup>
                {StudyYearHandler}
  		    </select>
            </li>
        )
    }
    else if (formdetail.labelname === 'How did you hear about us?'){
        const HowHandler = HowHearUS.map((How) =>{
            return <option value={How}>{How}</option>
        });
        return(
            <li>
            <label>{formdetail.labelname}</label>
            <select id="how_know">
			    <optgroup label="">
    			    <option disabled selected>select</option>
    			</optgroup>
    			{HowHandler}
  		    </select>
            </li>
        )
    }
    else if(formdetail.labelname ==="Are you currently in Vancouver?"){
        return(
            <li>
			    <label>{formdetail.labelname}</label>
                <input type="radio" name="Yes" value='Yes'></input>
				<input type="radio" name="No" value='No'></input>
			</li>
        )
    }
    else {
	return(
		<li>
			<label>{formdetail.labelname}<span>*</span></label>
			<input placeholder={formdetail.paceholdername} className="form_box" id={formdetail.inputId} ></input>
			<small></small>
		</li>
    )}
});
const Join =()=>{
    return (
	<div className="main">
			<h1>Membership Registration Form</h1>
				<form className='form' id='form' onSubmit="pre(e)">
				<div className="reg_form">
					<ul>
						{RegistrationInfo}
					</ul>
					<div className='button_div'>
						<button type='submit_button' value="Submit" id="btn">Register</button>
					</div>
				</div>
			</form>
		</div>
    )
}
export default Join;
