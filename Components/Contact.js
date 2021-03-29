import React from 'react';
const ContactForm  = [
    {
        name: "Name",
        id: "name_small",
        className: ""
    } , 
    {
        name: "Email",
        id: "name_small",
        className: ""
    },
    {
        name: "Message",
        id: "message_small",
        className: "submit_button"
    }
]
const Contact = ()=>{
    const ContactInfo = ContactForm.map((form)=>{
        if (form.name == "Name" || form.name=== "Email") {
        return(
            <li>
                <label for="form">{`${form.name}`}</label>
                <input type="text" id="form" name={form.name} placeholder={form.name} className="user-form" />
                <small  id= {form.id} ></small>
            </li>
        )
        }
        else {
            return (
                <li>
                    <label for="form">{`${form.name}`}</label>
                    <textarea type="text" id="form" name={form.name} placeholder={form.name} className="user-"></textarea> 
				    <small  id={form.id}></small>
				    <input className={form.className} type="submit" id="btn" value="Submit" />
                </li>
            )
        }
    });
    return (
        <div className="main contact">
			<h1>Questions, Suggestions, Complaints, Contact US!</h1>
			    <form id='user-question' name="form" className="QAform">
                    <ul>
                        {ContactInfo}
                    </ul>
                </form>
                <div id="msg">
				<pre></pre>
			</div>
		</div>
    )
}
export default Contact;