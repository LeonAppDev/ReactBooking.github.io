var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var PropTypes = require('prop-types');

//state
//lifecycle event
//UI
/*class App extends React.Component{

  render()
  {
    const user={
       img:'http://www.leon-ren.com/wp-content/uploads/2016/10/465897147158473876.jpg',
       name:'Leon Ren',
       username:'Leon64'
   };

    return (
           <Badge user={user}/>
  )
}
}*/


class Avatar extends React.Component{

  render(){

    return (<img src={this.props.img}/>)
  }
}

class Label extends React.Component{

  render(){
    return (<h1>Name: {this.props.name}</h1>)
  }
}

class ScreenName extends React.Component{

  render(){

    return (<h3>Uswrname:{this.props.username}</h3>)
  }
}


class Badge extends React.Component{

render(){
  return (
    <div>
    <img src={this.props.img}
        alt='Avatar'
        style={{width:300,height:300}} />
    <h1>Name:{this.props.name}</h1>
    <h3>UserName:{this.props.username}</h3>
    </div>
  )
}


}

Badge.propTypes={
  img:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  username:PropTypes.string.isRequired,
}
const userData={
 name:'LEON',
 username:'liangren64',
 img:'http://www.leon-ren.com/wp-content/uploads/2016/10/465897147158473876.jpg'

};

class Users extends React.Component{

  render(){

    const friends = this.props.list.filter(user=>(user.friend===true))
    const nonfriends = this.props.list.filter(user=>(user.friend!==true))
    return(
      <div>
      <h1>Friends</h1>
      <ul>
      {
        friends.map(user=>(<li key={user.name}>{user.name}</li>))
      }
      </ul>
      <hr/>
      <h1>NonFriends</h1>
      <ul>
      {
        nonfriends.map(user=>(<li key={user.name}>{user.name}</li>))
      }
      </ul>
      </div>
    )
  }
}

ReactDOM.render(
//<Users list={[{name:'John',friend:true},{name:'Phil',friend:false},{name:'Paul',friend:true},{name:'Dawn',friend:true},{name:'Richard',friend:false}]}/>,
<Badge img='http://www.leon-ren.com/wp-content/uploads/2016/10/465897147158473876.jpg' name='Leon' username='Liangren64'/>,
document.getElementById('app')
)
