import React from 'react';

const admineProfiles = [
    {
        name: "Keisei Aoki",
        positon: "VP of Technology",
        fav:"Turquoise, Navy",
        fluent: "English, Japanese",
        learning: "Russian, French",
        intro: "I rarely interacted with foreign languages and cultures until I was in my mid-teens. After I moved to Canada, I realized that human languages are so diverse and that knowing  them is one of the keys to opening others' minds. It's not easy to acquire foreign languages, but the payoff is tremendous."
    },
    {
        name: "Athena Chan",
        positon: "External VP/Artist",
        fav:"Turquoise, Navy",
        fluent: " Cantonese, English, Mandaring",
        learning: "Japanese, Korean",
        intro: "I love speaking in general so it will be nice if I can talk to more people by knowing their language! Also, it’s super cool when I can spot similarities between Chinese (Canto/Mando), Japanese and Korean. Another thing is that making multilingual puns are super fun heh :3"
    },
    {
        name: "Jasmine Cheng",
        positon: "Membership Chair",
        fav:"Turquoise, Navy",
        fluent: "Cantonese, English, Mandarin",
        learning: "ASL, French, German, Korean",
        intro: "I love traveling so it would be great if I can communicate with the locals in their language. Also, looking at the subtitles while watching a movie/tv series is kind of distracting. I hope I can understand what they are talking about without the help of subtitles! "
    },
    {
        name: "Chris Kassner",
        positon: "President",
        fav:"Turquoise, Navy",
        fluent: "English, Japanese,Portuguese",
        learning: "French, German, Korean, Mandarain, Punjabi, Russian",
        intro: "??"
    },
    {
        name: "Christina Lam",
        positon: "Internal VP",
        fav:"Turquoise, Navy",
        fluent: "Cantonese, English, French, Spanish",
        learning: "ASL, Mandarin",
        intro: "Why do you like languages: I have been fascinated by languages for the longest time-- in Grade 1, I wanted to learn all the languages in the world! I think that it’s so valuable to be able to share words and cultures with others. This quote, usually attributed to Nelson Mandela, sums it up so well:  “If you talk to a [person] in a language [they] understand, that goes to [their] head. If you talk to [them] in [their] own language, that goes to [their] heart."
    },
    {
        name: "Sarah Lazarevich",
        positon: "Program Chair",
        fav:"Turquoise, Navy",
        fluent: "Croatian, English, Serbian",
        learning: "French, German, Japanese, Russian, Spanish, Turkish",
        intro: "??"
    },
    {
        name: "Richard Nicolas",
        positon: "VP Assistant",
        fav:"Turquoise, Navy",
        fluent: "English, French, Japanese",
        learning: "Korean, Tagalog",
        intro: "I find that language is like art. Each language has its own unique structure that connects people. I find that knowing more languages even if you’re not perfect immerses you in its culture. I was not fluent at Tagalog at first and couldn’t experience the full Filipino culture until I was able to go to school for it. After learning the language, I was able to experience the fullest extent of my culture. I discovered that knowing more languages would give me that benefit of discovering its culture. "
    },
    {
        name: "Anthony Or",
        positon: "VP Financial Treasurer",
        fav:"Turquoise, Navy",
        fluent: "English, Cantonese",
        learning: "French, Japanese, Korean, Mandarin, Spanish",
        intro: "Languages bring people together, and the learning of different cultures shows respect to others from a different background. Languages are fun to learn, and can help you in your social, professional, and personal lives. Also, I got tired of people asking Are you not Chinese?  when I told them I couldn’t speak Mandarin. "
    },
    {
        name: "Zach Velasco",
        positon: "Workshop Coordinator",
        fav:"Turquoise, Navy",
        fluent: "Cebuano, English, French",
        learning: "Dutch, German, Korean, Tagalog",
        intro: "I like languages, as each one conveys emotions and speech in different ways. English is just a horrible language for conveying certain things in life, so knowing/learning other languages has helped me with that."
    }
    
]

const profiles = admineProfiles.map((admineProfile) => {
    return (
        <div id = "Table_2">
            <div className = "T_1">
                <img src = "pictures/about_us/athena.jpg" alt = "head" title = "head_logo"/>
            </div>
            <h1>{admineProfile.name}</h1>
            <h3>{admineProfile.positon}</h3>
            <p>Favourite colour:</p>
            <p>{`Fleunt:${admineProfile.fluent}`}</p>
            <p>{`Learning:${admineProfile.learning}`}</p>
            <p>{`Why do you like learning languages?${admineProfile.intro}`}</p>
        </div>
    )
});
const AboutUSTop = () => {
    return (
    <div className = "about_us_cover">
        <h1>About us</h1>
    <p>Meet our polyglot team!</p>
    <section className = "content"/>
    </div>
    );
}
const About = ()=> {
    return(
        <div>
            < AboutUSTop />
            {profiles}
        </div>
    );
}

export default About;