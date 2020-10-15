import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Portfolio extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Portfolio</h1>
<p>Thanks for your interest in my portfolio. Here you will find some examples of projects I have worked on (mostly for school as I'm just getting my start as a developer) along with a downloadable PDF copy of my resume for your consideration.</p>

<p>If you have any questions about my work or experience, would like to setup an interview for an opportunity within your organizagtion or you just want some pointers on your right hand picking technique, feel free to reach out to me via one of my points of contact on my Contact page. I look forward to speaking with you.</p>

<Widecard title="Password Generator" projectLink="https://tygerhardt.github.io/Homework_Week_3_Password_Generator/" text="This Pasword Generator was one of my first assignments in coding class. A user is prompted to enter the criteria for the password and a password is then generated. It's a simple but effective tool." />

<Widecard title="Pandemic Workday Planner" projectLink="https://tygerhardt.github.io/Homework_Week_5_Pandemic_Workday_Scheduler/" text="The Pandemic Workday Planner was another class assignment that was part of a series of fun, useful tools. BLUE represents the current hour on the planner, RED represents a past hour and GREEN represents upcoming hours. I followed the acceptance criteria and added a 'Clear Calendar' button...because sometimes you've just got to take the day off." />

<Widecard title="Weather Dashboard" projectLink="https://tygerhardt.github.io/Homework_Week_6/" text="The Weather Dashboard was one of our first assignments that we leveraged API's build a tool allows you to search for and return specific data. It was a bit challenging but mostly fun and a great introduction to using API's." />

<Widecard title="Team Generator" projectLink="https://github.com/tygerhardt/Homework_Week_10_Template_Engine_Employee_Summary" text="The Team Generator app was a challenge to build a Node CLI that takes in information about employees that utilized the Inquirer npm package to give user promots to generate an HTML webpage that displays summaries for each person. Because this is a command-line application I have included a link in my Read Me of the video demonstrating the app's functionality." />

<Widecard title="Book Vault" projectLink="https://shrouded-ocean-82572.herokuapp.com/" text="In this activity, I created a new React-based Google Books Search app. The assignment required me to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. I also used Node, Express and MongoDB so that users can save books to review or purchase later." />

<Widecard title="Class Project 1: TŪNADO!" projectLink="https://weerklank.github.io/HyperSlugs/" text="Do you love Spotify? Do you like the idea of being able to create playlists based on the weather in your home town or exotic location...AUTOMAGICALLY?!!! Of course you do...and that's what we did." 

text2="TŪNADO! was a collaborative effort and my very first coding bootcamp group project. This app succesfully leveraged Spotify and weather API's to create this cool and fun app. My primary focus was on the HTML and CSS as well as the name and overall look and feel. I was looking to create a clean, minimalist, late-70's early 80's aesthetic as a fun alternative to all of the Bootstrappy sites out there. In fact, for CSS we opted to use Skeleton CSS for it's ease of use and customization."/>

<Widecard title="Class Project 2: Quote Goat!" projectLink="https://quotegoat.herokuapp.com/" text="Who needs the musty words of famous, probably long deceased people to fuel your memes, greeting cards and the like with things THEY said...when that one guy down the street is probably the most witty and profound person you know? You know...that one guy. 


With QuoteGOAT!, you can submit quotes of your own and find new, relevant quotes that will make you the life of the party." 

text2="This app was a labor of love as I came up with the idea, the name and the overall look and feel with HTML and CSS. I was fortunate to be part of a very talented team that helped turn the idea into a working reality."/>

<Widecard title="Resume" projectLink="https://drive.google.com/file/d/1fBHNjhRWZtmrvdml6UYEcF8WMn5pKfYM/view?usp=sharing" text="If you are looking at this page it's well within the realm of possibility that you are considering me for an open opportunity within your organization." 

text2="For your convenience I have included a downloadable copy of my resume. If you have any questions regarding my background or experience or would like to set up a time to meet, please click on the Contact tab and select the method of communication that works best for you. Thanks in advance for your consideration. I look forward to speaking with you."/>

</div>
)
}
}
export default Portfolio