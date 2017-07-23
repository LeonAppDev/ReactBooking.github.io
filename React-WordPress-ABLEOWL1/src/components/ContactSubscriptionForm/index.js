import React,{Component} from 'react';
import style from './style';
import image from './image';
import OptionallyDisplayed from '../OptionallyDisplayed';
import CountryRegionData from './CountryRegionData';

class ContactSubscriptionForm extends Component{

constructor(props)
{
  super(props);
  this.state={showError:false,
    showSuccess:false,
  country:'United States'}
}
render()
{
  const onSubmit = (e)=>{

   let sendMessage=false;
   (this.state.name && this.state.email)?sendMessage=true:this.setState({showError:true,errorMessage:'Please make sure name and email is not null and email address is valid'})
    if (sendMessage===true)
    {
   let callMe='';
   this.state.callSelect?callMe='Please Call Me.':callMe='Please do not Call Me.'
   this.setState({showError:false});
    emailjs.send("outlook","template_EqPij2SK",{to_name:'Admin',from_name: this.state.name,email:this.state.email,
                phone_number:'Phone Number is '+this.state.phoneNum, call_me:callMe, from_country:'From '+this.state.country,notes: this.state.message,})
  .then(function(response) {
     //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
     alert("SUCCESS.");
  }, function(err) {

     alert("FAILED. error=" + err);
     console.log("FAILED.");
  });}
  else {

  console.log(this.state);
  }
      };

  const nameChange =(e)=>
  {
    this.setState({name:e.target.value});
  };

  const emailChange = (e)=>
  {
    const value = e.target.value;
    const emailValid=value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    emailValid?this.setState({email:e.target.value}):this.setState({email:null});

  };

const phoneChange=(e)=>
{
//  const value = e.target.value;
  //const phoneValid = value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i);
  const phoneValid = true;
  phoneValid?this.setState({phoneNum:e.target.value}):this.setState({phoneNum:null});
}

  const callChange = (e)=>
{
   this.setState({callSelect:e.target.checked});

}

const countryChange=(e)=>
{

  this.setState({country:e.target.value})

}

const messageChange=(e)=>
{
  this.setState({message:e.target.value})

}
  return(
    <div className={style.form}>
          <div className={style.formGroup}>
            <input className={style.formControl} id="exampleInputEmail1" placeholder="Name" type="text" onChange={nameChange}/>
          </div>
          <div className={style.formGroup}>
            <input className={style.formControl} id="exampleInputPassword1" placeholder="Email (Your email address will not be shared)" type="email" onChange={emailChange}/>
          </div>
          <div className={style.formGroup}>
									<input className={style.formControl} id="exampleInputphone1" placeholder="Phone" type="text" onChange={phoneChange}/>
									<label className={style.callCheck}>Please call me</label> <input type="checkbox" onChange={callChange}/>
								</div>
          <select onChange={countryChange} value={this.state.country}>

          {
            CountryRegionData.map(country=><option value={country[0]}>{country[0]}</option>)
          }

          </select>
          <div className={style.formGroup}>
 									<textarea rows="4" cols="8" placeholder="Message" onChange={messageChange}></textarea>
 								</div>
                <OptionallyDisplayed display={this.state.showError||this.state.showSuccess}>
                <div>
                <span style={this.state.showError?{'color':'red'}:{'color':'green'}}>{this.state.showError?this.state.errorMessage:this.state.successMessage}</span>
                </div>
                </OptionallyDisplayed>
          <div className={style.checkBox}>
          </div><button className={style.subBtn} type="submit" onClick={onSubmit}>SUBMIT</button>
    </div>

)
}
}

export default ContactSubscriptionForm;
