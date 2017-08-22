import React,{Component} from 'react';
import PropTypes from 'prop-types';
import dotnetify from 'dotnetify';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import VerifiedTextField from './VerifiedTextField';

export default class ParcelDetails extends Component{

  
constructor(props)
{
  super(props);
  this.vm = dotnetify.react.connect("ParcelDetailsVM", this);

  this.state={showError:null,errorMessage:''}

}


componentWillUnmount()
{this.vm.$destory();
}


render()
{


const buttonStyle = {margin:'10px', };
const divStyle = { margin: 'auto',width: '50%', padding: '10px',textAlign:'center',};
const dispatchState = ()=>{

  //this.setState(state);
  if(this.state.Length&&this.state.Breadth&&this.state.Height&&this.state.Weight)
      {
        console.log(this.state);
        this.setState({showError:false,errorMessage:''});
        this.vm.$dispatch(this.state);
      }
      else {
           console.log(this.state);
            this.setState({showError:true,errorMessage:'Please input size and weight of your parcel with right value '})
      }
}


return(
<div style={divStyle}>

<VerifiedTextField data={{id:'ParcelLength',floatingLabelText:'Length Of Parcel(cm)'}} value={this.state.Length} onChange={value=>this.setState({Length:value})}/><br/>
<VerifiedTextField  data={{id:'ParcelBreadth',floatingLabelText:'Breadth Of Parcel(cm)'}} value={this.state.Breadth} onChange={value=>this.setState({Breadth:value})}/><br/>
<VerifiedTextField  data={{id:'ParcelHeight',floatingLabelText:'Height Of Parcel(cm)'}} value={this.state.Height} onChange={value=>this.setState({Height:value})}/><br/>
<VerifiedTextField  data={{id:'ParcelWeight',floatingLabelText:'Weight Of Parcel(g)'}} value={this.state.Weight} onChange={value=>this.setState({Weight:value})}/><br/>

<RaisedButton label='Get Cost' style={buttonStyle} primary={true} onClick={dispatchState}/><br/>
{(this.state.showError===true)?(<span style={{color:'red'}}>{this.state.errorMessage}</span>):<div>Delivery cost of this parcel is <b>{this.state.Cost>0?this.state.Cost:'undefined'}</b></div>}
</div>
)
}

}
