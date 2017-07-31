import React from 'react';
import style from './style';
import media from './media';
import SubscriptionForm from 'components/SubscriptionForm';
import ContactSubscriptionForm from 'components/ContactSubscriptionForm';

function Contact() {

   const address=(
     <ul className={style.address}>
								<li><span className={style.icon}><img src={media.addressImg}/></span>
								<span><strong>ADDRESS</strong><address><br/>9350 Wilshire Blvd, Suite 203, Beverly Hills, CA 90212</address></span></li>
								<li><span className={style.icon}><img src={media.phoneImg}/></span>
									<span><strong>PHONE </strong><br/> +1 (213) 269-4522</span></li>
								<li><span className={style.icon}><img src={media.emailImg}/></span>
									<span><strong>EMAIL </strong><br/><a href="mailto:admin@ableowl.com">admin@ableowl.com</a></span></li>
                  <li><span className={style.icon}><img src={media.faxImg}/></span>
  									<span><strong>FAX </strong><br/>+1 (213) 269-4523</span></li>

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
