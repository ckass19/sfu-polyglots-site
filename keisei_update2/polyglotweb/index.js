
function emailvalidation(){
    var email = document.forms['form']['Email'].value;
    var name = document.forms['form']['Name'].value;
    var message = document.forms['form']['Message'].value;
    var valid_email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let messages = []
    if (email == ''){
        alert('Email must be filled out!!');
        return false;
    }
    else if(! email.match(valid_email)){
        alert('Email must be valid!!')
    }
    else if (name == ''){
        alert('Name nust be filled out!!')
    }
    else if(message ==''){
        alert('Message must be filled out!!')
    }
    else{
         alert("Thank you for your submission!!")
    }
}
var user_form = Array.from(document.querySelectorAll('#form')).reduce((acc,form) => ({ ...acc, [form.name]: form.value}), {});
    localStorage.setItem('UserformList',JSON.stringify(user_form));
    

    
