import React from 'react';
import style from './style';
import image from './image';

function SubscriptionForm(){

return(
    <div className={style.form}>
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
              USA
            </option>
            <option value="Australia">
              Australia
            </option>
            <option value="New Zealand">
              New Zealand
            </option>
          </select>
          <div className={style.checkBox}>
            <label>Subscribe to the weekly tip too. Join the other 30,000 subscribers.<input type="checkbox"/></label>
          </div><button className={style.subBtn} type="submit">SUBSCRIBE</button> <a className={style.canBtn} href="#">CANCEL MY SUBSCRIPTION</a>
        </form>
    </div>

)


}

export default SubscriptionForm;
