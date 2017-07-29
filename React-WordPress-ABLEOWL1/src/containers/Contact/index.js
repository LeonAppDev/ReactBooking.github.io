import React from 'react';
import style from './style';
import media from './media';
import SubscriptionForm from 'components/SubscriptionForm';
import ContactSubscriptionForm from 'components/ContactSubscriptionForm';

function Contact() {

   const address=(
     <ul className={style.address}>
								<li><span className={style.icon}><img src={media.addressImg}/></span>
								<span><strong>ADDRESS</strong><address><br/>100 Wilshire Blvd, Suite 700 Santa Monica, CA  90401</address></span></li>
								<li><span className={style.icon}><img src={media.phoneImg}/></span>
									<span><strong>PHONE </strong><br/> +1 310.917.1027</span></li>
								<li><span className={style.icon}><img src={media.emailImg}/></span>
									<span><strong>EMAIL </strong><br/><a href="mailto:admin@ableowl.com">admin@ableowl.com</a></span></li>

							</ul>


   );



  return (
    <section id={style.contentWrap}>
    <div className={style.container}>
         <div className={style.journalContact}>
           <h1>Contact</h1>
          <div className={style.row}>
          <div className={style.colMd5}>
         {address}
        <img src={media.listenerImg} className={style.supportImg}/>
          </div>
          <div className={style.colMd7}>

          <ContactSubscriptionForm />
          </div>
          </div>
        </div>
     </div>
   <SubscriptionForm/>
  </section>
  );
}


export default Contact;
