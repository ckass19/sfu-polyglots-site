const formdetails =[
    {
        labelname:"Name",
        paceholdername: "Name",
        inputId: "Name",
        smallId:"",
        warning: "Please"
    },
    {
        labelname:"Preferred Name",
        paceholdername:"preferred Name",
        inputId: "pref_name",
        smallId:"pn_small",
        warning: "please"
    },
    {
        labelname:"Student ID (optional)",
        paceholdername:"ID",
        inputId: "ID",
        smallId:"id_small",
        function: IdValidation,
        warning: "Please"
    },
    {
        labelname:"SFU/FIC email",
        paceholdername:"Email",
        inputId: "Email",
        smallId:"email_small",
        function: EmailValidation,
        warning: "Please"
    },
    {
        labelname:"Program of Study",
        paceholdername:"preferred Name",
        inputId: "pref_name",
        smallId:"pn_small",
        warning: "Please"
    },
    {
        labelname:"Year of study",
        paceholdername:"Name",
        inputId: "Name",
        smallId:"",
        warning: "Please pick year of study"
    },
    {
        labelname:"Your Native Language(s)",
        paceholdername:"preferred Name",
        inputId: "pref_name",
        smallId:"pn_small",
        warning: "please pick your Native language"
    },
    {
        labelname:"Language(s) That You are Fluent In",
        paceholdername:"Language(s)",
        inputId: "ID",
        smallId:"id_small",
        function: IdValidation,
        warning: "please"
    },
    {
        labelname:"Language(s) That You Are Interested In",
        paceholdername:"Language(s)",
        inputId: "Email",
        smallId:"email_small",
        function: EmailValidation,
        warning: "please"
    },
    {
        labelname:"How did you hear about us?",
        paceholdername:"",
        inputId: "pref_name",
        smallId:"pn_small",
        warning: ""
    },
    {
        labelname:"Are you currently in Vancouver?",
        paceholdername:"preferred Name",
        inputId: "pref_name",
        smallId:"pn_small",
        warning: ""
    }
]

const Programs = [
    {
        department: "Applied Science",
        id: "AS",
        majors: ["Computing Science","Geographic Information Science",
        "Engineering Science","Mechatronic Systems Engineering",
        "Software Systems","Sustainable Energy Engineering"
        ]
    },
    {
        department: 'Arts and Social Sciences',
        id: 'AS2',
        majors: ["Anthropology","Behavioural Neuroscience",
    "Cognitive Science","Criminology","Economics","English","French","Gender, Sexuality, and Women's Studies",
    "History","Humanities","Education","Indigenous Studies","International Studies","Labour Studies","Linguistics","Philosophy","Political Science",
    "Psychology","Sociology","World Languages and Literatures","World Literature"]
    },
    {
        department: 'Beedie School of Business',
        id: 'BBA',
        majors: ["Business"]
    },
    {
        department: 'Communication,Art and Technology',
        id: 'CAT',
        majors: ["Art, Performance and Cinema Studies","Communication","Education","Creative Technologies in Digital Journalism","Dance",
        "Film","Interactive Arts and Technology","Music","Theatre","Visual Art"]
    },
    {
        department: 'Education',
        id: 'ED',
        majors: ["Education"]
    },
    {
        department: 'Environment',
        id: 'EN',
        majors: ["Archaeology","Environmental Science","Geographic Information Science","Global Environmental Systems","Human Geography",
        "Physical Geography","Resource and Environmental Management"]
    },
    {
        department: 'Health Sciences',
        id: 'HS',
        majors: ["Health Science"]
    },
    {
        department: 'Science',
        id: 'S',
        majors: ["Actuarial Science","Applied Mathematics","Applied Physics","Behavioural Neuroscience",
                "Biological Physics","Biological Sciences","Biomedical Physiology","Chemical Physics","Chemistry","Data Science",
                "Earth Sciences","Kinesiology","Mathematical Physics","Mathematics","Molecular Biology and Biochemistry","Operations Research",
                "Physics","Statistics"]
    }
]
