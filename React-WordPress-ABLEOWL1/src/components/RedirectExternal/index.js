import React, { Component } from "react";

/*export class RedirectExternal extends Component {
  constructor( props ){
    super(props);
    this.state = { ...props };
  }

  redirect=()=>window.location = 'www.ableowl.com';
  componentWillMount(){
    //window.location = this.state.route.loc;
    this.redirect;
  }
  render(){
    return ()=>window.location = 'www.ableowl.com';
  }
}
*/

function RedirectExternal({link})
{

    window.location=link;
    return(

    <h1 style={{"text-align":"center"}}>Redirect.....</h1>
    )
}
export default RedirectExternal;
