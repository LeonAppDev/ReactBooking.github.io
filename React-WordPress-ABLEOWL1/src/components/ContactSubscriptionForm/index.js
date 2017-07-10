import React from 'react';
import style from './style';
import image from './image';

function ContactSubscriptionForm(){

return(
    <div className={style.form}>
        <form>
          <div className={style.formGroup}>
            <input className={style.formControl} id="exampleInputEmail1" placeholder="Name" type="text"/>
          </div>
          <div className={style.formGroup}>
            <input className={style.formControl} id="exampleInputPassword1" placeholder="Email (Your email address will not be shared)" type="email"/>
          </div>
          <div className={style.formGroup}>
									<input className={style.formControl} id="exampleInputphone1" placeholder="Phone" type="text"/>
									<label className={style.callCheck}>Please call me</label> <input type="checkbox"/>
								</div>
          <select>
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
          <div className={style.formGroup}>
 									<textarea rows="4" cols="8" placeholder="Message"></textarea>
 								</div>
          <div className={style.checkBox}>
          </div><button className={style.subBtn} type="submit">SUBMIT</button>

        </form>
    </div>

)


}

export default ContactSubscriptionForm;
