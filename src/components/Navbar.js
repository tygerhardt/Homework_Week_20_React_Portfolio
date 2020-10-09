  
import React, { Component } from 'react';
import Navitem from './NavItem';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
   
    render() {
        return (
          
           
            
            <nav> 
              <h1 class="tyGerhardt">Ty Gerhardt</h1>
                 
            <img class="tyRound centerImage" src="https://i.imgur.com/zylubXX.png"></img>
            <p class="bio">Front-End Developer / Digital Producer / Project Manager / Certified Scrum Master</p>
                
            <ul>
            <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
            <Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem>
            <Navitem item="Portfolio" tolink="/portfolio" activec={this.activeitem}></Navitem>
            <Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p class="bio"><em>"The purpose of life is to be defeated by greater and greater things."</em> -Rainer Maria Rilke</p>
            </nav>
            )
        }
    }
    
export default Navbar