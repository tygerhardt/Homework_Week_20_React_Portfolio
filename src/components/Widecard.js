import React, { Component } from 'react'
class Widecard extends Component {

handleClick (link) {
    window.open (link, "_blank")
    console.log(link)
}    



render() {
return (
<div class="widecard">
<div class="compdet">
<h3>{this.props.title}</h3>
<p class="secondtext">{this.props.text}</p>
<p class="secondtext">{this.props.text2}</p>


<td class="button button2" onClick={()=> this.handleClick(this.props.projectLink)}>Click Here</td>



</div>
</div>




)
}
}
export default Widecard