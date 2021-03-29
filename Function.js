import React from 'react';

export const  hide = (id)=>{
   document.getElementById(id).style.display = 'none';
  }
export const show = (id)=> {
    document.getElementById(id).style.display ='block';
  }

const SuccessHandler= (box,id)=>{
    box.classList.add("success");
    box.classList.remove('error');
    hide(id);
}
const ErrorHandler=(box,id)=>{
    box.classList.add("error");
    box.classList.remove('success');
    show(id);
}
  export function EmailValidation(){
    let Email = Email_box.value;
    let Email_box = document.getElementById('Email');
    let valid_email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (Email == ''){
        Email_box.classList.remove("error");
        Email_box.classList.remove("success");
        hide('email_small');
        return
    }
    else if (! Email.match(valid_email)){
        document.getElementById("email_small").textContent = "Email is not valid";
        ErrorHandler(Email_box,'email_small');
    }
    else if (Email.match(valid_email)){
        SuccessHandler(Email_box,'email_small');
    }
}
export function IdValidation(){
    let Id_box = document.getElementById('ID');
    let studentID = Id_box.value;
    var reg = /^[0-9]+$/; 
    if (studentID == ''){
      	Id_box.classList.remove("error");
        Id_box.classList.remove("success");
        hide('id_small');
        return
    }
    else if(! studentID.match(reg)){
        document.getElementById("id_small").textContent = "Id is not valid";
        ErrorHandler(Id_box,'id_small');
    }
    else if (studentID.match(reg)){
        SuccessHandler(Id_box,'id_small');
    }
  }
  function show_hide_majors(number){
    const majors = ['AS','AS2','BBA','CAT','ED','EN','HS','S'];
    majors.map( function (value,index){
       if (index == number) {
           show(majors[number]);
       }
       else{
           hide(value);
       }
   });
}
export function StudyHandler(Faculity){
    show('Major_label');
   	switch(Faculity){
   		case 'Applied Science':
   			show_hide_majors(0)
   		break;
  		case 'Arts and Social Sciences':
   			show_hide_majors(1)
   		break;
   		case 'Beedie School of Business':
   			show_hide_majors(2)
   		break;
  		case 'Communication,Art and Technology':
   			show_hide_majors(3)
   		break;
  		case 'Education':
   			show_hide_majors(4)
   		break;
   		case 'Environment':
   			show_hide_majors(5)
   		break;
   		case 'Health Sciences':
   			show_hide_majors(6)
   		break;
   		case 'Science':
   			show_hide_majors(7)
   		break;
   	}
}


