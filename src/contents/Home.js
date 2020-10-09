  
import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/ty-1.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Ty Gerhardt','I am a web developer from Portland, OR']} speed={75} eraseDelay={300}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home