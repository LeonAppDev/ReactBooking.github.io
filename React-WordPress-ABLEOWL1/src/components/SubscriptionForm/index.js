import React from 'react';
import style from './style';
import image from './image';

function SubscriptionForm(){

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
        <div className={style.excelImg}><img src={image.magazineImg}/></div>
        <form>
          <div className={style.formGroup}>
            <input className={style.formControl} id="exampleInputEmail1" placeholder="Name" type="text"/>
          </div>
          <div className={style.formGroup}>
            <input className={style.formControl} id="exampleInputPassword1" placeholder="Email (Your email address will not be shared)" type="email"/>
          </div><select>
            <option value="Select country">
              Select country
            </option>
            <option value="USA">
              country
            </option>
            <option value="Australia">
              country
            </option>
            <option value="New Zealand">
              country
            </option>
          </select>
          <div className={style.checkBox}>
            <label>Subscribe to the weekly tip too. Join the other 30,000 subscribers.<input type="checkbox"/></label>
          </div><button className={style.subBtn} type="submit">SUBSCRIBE</button> <a className={style.canBtn} href="#">CANCEL MY SUBSCRIPTION</a>
        </form>
      </div>
    </div>
  </div>

)


}

export default SubscriptionForm;
