import React,{Component}from 'react';
import style from './style';
import media from './media';
import ListItem from 'components/ListItem';
import SubscriptionForm from 'components/SubscriptionForm';
import UpperSubscriptionForm from 'components/UpperSubscriptionForm';
import Testimonials from './Testimonials';



function Journal(){

  const items=['See what Excel can do in the hands of experts',
                 'Discover better ways of working',
                 'Learn new Excel features',
                 ];

const testimonialItems = [
  {word:'"I am truly finding the monthly tips journal to be very useful. For example, from the January edition I used the banding tip on some of my huge data spreadsheets. "',
  author:'Karen Martin, Manager, Western NSW LHD'},
  {word:'"I am truly finding the monthly tips journal to be very useful. For example, from the January edition I used the banding tip on some of my huge data spreadsheets. "',
  author:'Karen Martin, Manager, Western NSW LHD'},
  {word:'"I am truly finding the monthly tips journal to be very useful. For example, from the January edition I used the banding tip on some of my huge data spreadsheets. "',
  author:'Karen Martin, Manager, Western NSW LHD'},
];

  const upperSubscription=(
    <div className={style.row}>

      <div className={style.colMd5}>
      <ListItem ulStyle={style.hireHeading} items={items} />
             <div className={style.sampleImg}><img src={media.journalImg} alt="sample"/> <button className={style.sampleBth}>open sample pdf</button></div>
           </div>
           <div className={style.colMd7}>
           <UpperSubscriptionForm />
             <div className={style.journalVideo}>
               <h2>sample video</h2>
               <img src={media.videoImg} alt="video"/>
             </div>
      </div>
        </div>
   );


return(
  <section id={style.contentWrap}>
  <div className={style.container}>
       <div className={style.journal}>
         <h1>Free monthly journal Excel Case studies & tips</h1>
        {upperSubscription}
      </div>
   </div>
   <div className={style.greyHire}>
         <div className={style.mainSec}>
           <div className={style.rowTesti}>
           	<div className={style.colMd3}><img src={media.owlJournalImg} alt="img" className={style.imgOwl}/></div>
            <Testimonials testimonialItems={testimonialItems} />
           </div>

         </div>
     </div>
<div className={style.clientSec}>
<h3>AbleOwl is a supporter of</h3>
				<span><img src={media.radioLogo} alt="client-logo"/></span>
				<span><img src={media.specialLogo} alt="client-logo"/></span>
				<span><img src={media.cancerLogo} alt="client-logo"/></span>
				<span><img src={media.variertyLogo} alt="client-logo"/></span>
</div>
 <SubscriptionForm />
</section>
)

}

export default Journal;
