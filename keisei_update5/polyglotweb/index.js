// for event pages 

function ZoomLink_show_hide() {
    let time = new Date();
    let day = time.getDay();
    let hour = time.getHours();
    let minutes = time.getHours();
    if (day == 1 & hour == 1 & minutes <= 10){
        show('zoom_general_link');
        document.getElementById('zoom_text').textContent = "Join Meeting";
        if(hour == 1 & minutes <= 20){
            hide('zoom_general_link');
            document.getElementById('zoom_text2').textContent = "See you next week!!";
        }
        else{
            return;
        }
    }
    else {
        hide('zoom_general_link');
        document.getElementById('zoom_text2').textContent = "Button will pop up when meeeting begins";
    }
}



// for Contact us html
function validations(){
    let email = document.forms['form']['Email'].value;
    let name = document.forms['form']['Name'].value;
    let message = document.forms['form']['Message'].value;
    let valid_email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (name == '' & email=='' & message==''){
        alert('You can not submit empty question')
        return false;
    }
    else if (name == '' & email=='' ){
        alert('Email and Name can not be blank')
        return false;
    }
    else if (name == '' & message=='' ){
        alert('Name and Message can not be blank!!')
        if(! email.match(valid_email)){
        alert('Email must be valid!!')
    }
    }
    else if (email == ''){
        alert('Email can not be blank!!');
    }
    else if(! email.match(valid_email)){
        alert('Email is not valid!!')
    }
    else if(message ==''){
        alert('Message can not be blank!!')
    }
    else{
         alert("Thank you for submission")
    }
}
const user_form = Array.from(document.querySelectorAll('#form')).reduce((acc,form) => ({ ...acc, [form.name]: form.value}), {});
    localStorage.setItem('UserformList',JSON.stringify(user_form));
// for registration forms
var form = document.querySelector("#form");
const  btn = document.getElementById('btn');
// document.querySelector("#form").addEventListener('submit',pre) 
 function pre(){
   form.preventDefault();
   MultiValidation();
};

function MultiValidation() {
    let PName_box = document.getElementById('pref_name');
    let PName = PName_box.value;
    if (PName == ""){
        document.getElementById("pn_small").textContent = "Please fill in your preferred name";
        ErrorHandler(PName_box,'pn_small');
    }
}

function hide(id){
    var AS1 = document.getElementById(id);
    AS1.style.display = 'none';
}
function show(id){
    var AS2 = document.getElementById(id);
    AS2.style.display ='block';
}
function uncheckNo(){
    document.getElementById('N').checked =  false ;
    hide('location');
}
function uncheckYes(){
    document.getElementById('Y').checked =  false ;
    show('location');
}
function hide2(id){
    var AS3 = document.getElementById(id);
    AS3.style.visibility = 'hidden';
}
function show2(id){
    var AS4 = document.getElementById(id);
    AS4.style.visibility = 'visible';
}

function show_hide_majors(number){
 	let majors = ['AS','ASS','BBA','CAT','ED','EN','HS','S'];
 	majors.map( function (value,index){
        if (index == number) {
            show(majors[number]);
        }
        else{
            hide(value);
        }
    });
 }
function StudyHandler(select){
    show('Major_label');
    let Faculity = select.value;
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
function SuccessHandler(box,id){
    box.classList.add("success");
    box.classList.remove('error');
    hide(id);
}
function ErrorHandler(box,id){
    box.classList.add("error");
    box.classList.remove('success');
    show(id);
}
function EmailValidation(){
    let Email_box = document.getElementById('Email');
    let Email = Email_box.value;
    
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
function IdValidation() {
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




let Questitons = [];
const addQuestion = (ev) => {
    ev.preventDefault() // form automatically reload page when users click button but we don not want it.
    let Email = document.forms['form']['Email'].value;
    let Email_box = document.forms['form']['Email'];
    let Name = document.forms['form']['Name'].value;
    let Name_box = document.forms['form']['Name'];
    let Message = document.forms['form']['Message'].value;
    let Message_box = document.forms['form']['Message'];
    let valid_email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (Name == ''){
        document.getElementById("name_small").textContent = "Name is not valid";
        Name_box.classList.remove("error");
        Name_box.classList.remove("success");
        show('name_small');
    }
    else if (Email==''){
        document.getElementById("email_small").textContent = "Email is empty";
        Email_box.classList.remove("error");
        Email_box.classList.remove("success");
        show('email_small');
    }
    else if (Message==''){
        document.getElementById("message_small").textContent = "Message is not valid";
        Message_box.classList.remove("error");
        Message_box.classList.remove("success");
        show('message_small');
    }
    else if(! Email.match(valid_email)){
        document.getElementById("email_small").textContent = "Email is not valid";
        ErrorHandler(Email_box,'email_small');
    }
    else{
        Name_box.classList.add("success");
        Email_box.classList.add("success");
        Message_box.classList.add("success");
        Name_box.classList.remove("error");
        Email_box.classList.remove("error");
        Message_box.classList.remove("error");
        hide('name_small');
        hide('email_small');
        hide('message_small');
        alert("Thank you for submission")
        let question = {
        id: Date.now(),
        name: Name,
        email: Email,
        message: Message}
        Questitons.push(question) // push function adds question to the array (questions)
        document.forms[0].reset(); // clear the form for next users!!
    }
    // store data.
    // document.querySelector('form').reset();
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(Questitons, '\t',2);
}  
 // document.addEventListener('DOMContentLoaded', ()=>{
   // document.getElementById('user-question').addEventListener('click',addQuestion)
// })