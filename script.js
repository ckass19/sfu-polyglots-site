


window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction2() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 


var isMobile = false;

function toggleMobile(){
	if(isMobile == false){
		show_mobile_bar();
		isMobile = true;
		return;
	}
	if(isMobile == true){
		hide_mobile_bar();
		isMobile = false;
		return;
	}
}


function show_mobile_bar(){
	let navbar = document.getElementById('navbar-mobile');
	if (window.screen.width <= 600 ) {
		//changed from 100%;
		navbar.style.width = '75%';
	} 
	else {
		navbar.style.width = "200px";
	}
}


function hide_mobile_bar(){
    let navbar = document.getElementById('navbar-mobile');
        navbar.style.width = "0px";
}








// for event pages may not use 
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
// for Contact us html validations
function validations(){
    let [email,name,message,valid_email] = 
    [document.forms['form']['Email'].value,document.forms['form']['Name'].value,document.forms['form']['Message'].value,
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/]
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
    document.getElementById(id).style.display = 'none';
}
function show(id){
    document.getElementById(id).style.display ='block';
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
/* functions for form validation */
function submissionVal(){
        faculityVal()
        yearVal()
        InterestedLangVal()
        How_hearVal()
        EmailValidation()
        IdValidation()
        NamesVal()
        FluentLangVal()
}
/* general format of the validation and validaitons for each*/
function EmailValidation(){
    let [ Email_box,valid_email] = [document.getElementById('Email'), /^[^ ]+@[^ ]+\.[a-z]{2,3}$/]
    let Email = Email_box.value;
    let [sfu_email,fic_email] = ["@sfu.ca","@learning.fraseric.ca"]
    if (Email == ""){
        Email_box.classList.remove("error");
        Email_box.classList.remove("success");
        document.getElementById("email_small").textContent = "Please fill in email adress";
        show("email_small");
    }
    else if (! Email.match(valid_email) | !sfu_email | !fic_email){
        document.getElementById("email_small").textContent = "Please enter valid email adress";
        ErrorHandler(Email_box,'email_small');
    }
    else if (Email.match(valid_email)){
        SuccessHandler(Email_box,'email_small');
    }
}
function IdValidation() {
    let Id_box = document.getElementById('ID')
    let studentID = Id_box.value
    let reg = /^[0-9]+$/
    if (studentID == ''){
        Id_box.classList.remove("error");
        Id_box.classList.remove("success");
        hide('id_small');
        return
    }
    else {
        SuccessHandler(Id_box,'id_small');
    }
}
function ValidationFormat(formvalue,value,small){
    if(formvalue== value){
        show(small);
    }
    else{
        hide(small);
    }
}
function faculityVal(){
    let Faculityinfo = document.getElementById('how_know').value
    ValidationFormat(Faculityinfo,'Choose Your Faculty','facrity_small');
}
function yearVal(){
    let yearinfo = document.getElementById('cars').value
    ValidationFormat(yearinfo,'Choose your year','year_small');
}
function InterestedLangVal(){
    let interestlang = document.getElementById('interested_lang').value
    ValidationFormat(interestlang,"","interested_lang_small");
}
function FluentLangVal(){
    let fluentlang = document.getElementById('fluent_lang').value
    ValidationFormat(fluentlang,"",'fluent_lang_small');
}
function InterestedLangVal(){
    let interestlang = document.getElementById('interested_lang').value
    ValidationFormat(interestlang,"",'interested_lang_small');
}
function How_hearVal(){
    let hear = document.getElementById('how_hear').value
    ValidationFormat(hear,'select','hear_small');
}
function NamesVal() {
    let name = document.getElementById('Name').value;
    ValidationFormat(name,'','name_small');
}
/* 2021 May  We may not use follwing code */

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