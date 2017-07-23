import React,{Component} from 'react';
import style from './style';
import image from './image';
import TextField from '../TextField';
import DropDownloadList from '../DropDownloadList';
import OptionallyDisplayed from '../OptionallyDisplayed';
import renderHTML from 'react-render-html';
import SFNorthAmerica from './SFNorthAmerica';

class SubscriptionForm extends Component{

constructor(props)
{
  super(props);
  this.state={showErrors:false};

}

handleSubmit = ()=> {this.setState({showErrors:true});
                if(this.state.showErrors===true)
                console.log("true");
}

render(){
return(
  <div className={style.formSecBg}>
    <div className={style.container}>
      <div className={style.mainSec1}>
        <div className={style.formTextSec}>
          <h2>Free monthly journal Excel Case studies & tips</h2>
          <p><span><i aria-hidden="true" className={style.iStyle}></i></span>See what Excel can do in the hands of experts</p>
          <p><span><i aria-hidden="true" className={style.iStyle}></i></span>Discover better ways of working</p>
          <p><span><i aria-hidden="true" className={style.iStyle}></i></span>Learn new Excel features</p>
        </div>
        <div className={style.excelImg}><a href="" onClick={()=>setTimeout(()=>{const response={file:'http://ableowl.net/wp-content/uploads/2017/07/ExcelTipsJournalSampleUS.pdf'}; window.open(response.file);},1)}><img src={image.magazineImg} /></a></div>
         {renderHTML(SFNorthAmerica)}
        
      </div>

    </div>
  </div>

)
}


}

export default SubscriptionForm;
