
function validations(){
    let email = document.forms['form']['Email'].value;
    let name = document.forms['form']['Name'].value;
    let message = document.forms['form']['Message'].value;
    let valid_email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let messages = []
    if (name == '' & email=='' & message==''){
        alert('You can not submit empty question')
        return false;
    }
    else if (name == '' & email=='' ){
        alert('You have to fill in Name and Email')
        return false;
    }
    else if (name == '' & message=='' ){
        alert('You have to fill in Name and Message')
        if(! email.match(valid_email)){
        alert('Email must be valid!!')
    }
    }
    else if (email == ''){
        alert('Email must be filled out!!');
    }
    else if(! email.match(valid_email)){
        alert('Email must be valid!!')
    }
    else if(message ==''){
        alert('Message must be filled out!!')
    }
    else{
         alert("Thank you for your submission")
    }
}
// for registration forms
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

 

function StudyHandler(select){
    let majors = ['AS','ASS','BBA','CAT','ED','EN','HS','S']
    show('Major_label');
    if( select.value =='Applied Science'){
        majors.map( function (value,index){
            if (index == 0) {
                show(majors[0]);
            }
            else{
                hide(value);
            }
        });
    } 
    else if (select.value == 'Arts and Social Sciences'){
         majors.map( function (value,index){
            if (index == 1) {
                show(majors[1]);
            }
            else{
                hide(value);
            }
        });
    }
    else if (select.value == 'Beedie School of Business'){
          majors.map( function (value,index){
            if (index == 2) {
                show(majors[2]);
            }
            else{
                hide(value);
            }
        });
    } 
    else if (select.value == 'Communication,Art and Technology'){
         majors.map( function (value,index){
            if (index == 3) {
                show(majors[3]);
            }
            else{
                hide(value);
            }
        });
    } 
    else if (select.value == 'Education'){
         majors.map( function (value,index){
            if (index == 4) {
                show(majors[4]);
            }
            else{
                hide(value);
            }
        });
    }  
    else if (select.value == 'Environment'){
          majors.map( function (value,index){
            if (index == 5) {
                show(majors[5]);
            }
            else{
                hide(value);
            }
        });
    } 
    else if (select.value == 'Health Sciences'){
         majors.map( function (value,index){
            if (index == 6) {
                show(majors[6]);
            }
            else{
                hide(value);
            }
        });
    } 
    else if (select.value == 'Science'){
         majors.map( function (value,index){
            if (index == 7) {
                show(majors[7]);
            }
            else{
                hide(value);
            }
        });
    } 
} 
function IdValidation() {
    let studentID = document.getElementById('ID').value;
    var reg = /^[0-9]+$/;
    if (! studentID.match(reg)){
        alert('please type valid studentID');
    }
}
function EmailValidation() {
    let Email = document.getElementById('Email').value;
    let valid_email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (! studentID.match(reg)){
        alert('please type valid email');
    }
}
const user_form = Array.from(document.querySelectorAll('#form')).reduce((acc,form) => ({ ...acc, [form.name]: form.value}), {});
    localStorage.setItem('UserformList',JSON.stringify(user_form));
    

    