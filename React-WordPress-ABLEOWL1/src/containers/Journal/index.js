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
  {word:'“I am truly finding the monthly tips journal to be very useful. For example, from the January edition I used the banding tip on some of my huge data spreadsheets. In the March edition I\'ve just picked up the tip for using the Ctrl+Shift+ left arrow keys on those same huge spreadsheets. Even though I regularly create complicated spreadsheets with charts and pivot tables, sometimes it\'s just the little tips that I\'ve never known about that make life easier and more efficient. AbleOwl really has made me the go-to girl in the office for Excel problems - some days I\'m not sure whether to thank you or curse you, haha.”',
  author:'Karen Martin, Manager, Western NSW LHD'},
  {word:'“The Excel Tips and Tricks Journal is much appreciated. I usually print out a copy and leave it on our Team Round Table. My team members browse through it, sometimes take it to their desks, and occasionally remember to put it back for others to read!” ',
  author:'Peter Burgess, Database Programmer, Olex NZ Ltd'},
  {word:'“I have been using AbleOwl for more years than I care to think about. The expansion over the years in the services which are available has helped tremendously. One of the best has been the introduction of the monthly tips journal.\
Whilst they don’t always address complex or difficult subjects they DO always provide really useful tips which can be understood and more importantly used by real people in really normal jobs. My team always look forward to the next one coming out.”',
  author:'Mr. Robyn Eames, Financial Compliance Manager, Victor Chandler, UK'},
  {
    word:'“Your newsletters are fantastic and really handy. I found the recent one really helpful and used it practically as well.”',
    author:'Minoo Siganporia, Finance Manager, Fletcher Building',
  },
  {
    word:'“The journals are informative and easy to navigate.”',
    author:'Nadia Haua, Financial Administrator, INEX Independent Extrusions Limited',
  },
  {
    word:'“Useful information.”',
    author:'Sally Jackson, Human Resources Manager, Indigo NZ Ltd',
  },
  {
    word:'“Love them. They are worth the time reading.”',
    author:'Adrian C. Guzman Alamia, Senior Administrative Assistant, Buck Consultants, USA',
  },
  {
    word:'“I\'ve been using the Able Owl free journals for around two years now and can honestly say that, because I\'m too busy to read large amounts of information in detail, the journals work perfectly. I can read through them quickly as they come in and get good ideas for what is possible to add to my spreadsheets. Of all the various resources available,\
    I\'ve found these journals a perfect way to constantly keep updating my skills without the burden of losing too much time.”',
    author:'Benjamin Moriarty, Project Accountant, Employment Office, Australia',
  },
  {
    word:'“Our finance team look forward to receiving the weekly and monthly journals. They are very informative.\
    There are so many tricks in Excel and we are always surprised how many we don\'t know about. There are a number of new features in the latest Excel versions which we pick up through the AbleOwl journals.”',
    author:'Ben Blundell, Accounting Manager, Dynamic Controls',
  },
  {
    word:'“The journals are very useful thanks. I considered myself quite an expert user, but these have definitely taught me a thing or two.”',
    author:'Milan Hira, IT Manager, AJ Park',
  },
  {
    word:'“I’ve been appreciating the weekly journals. I’ve been picking up new skills and helpful ideas from the tips, and look forward to them coming through each week. At some stage in the next few months, I hope to do one of the training courses you offer. ”',
    author:'Glenn Johnson, Business Manager, Capernwray New Zealand',
  },
  {
    word:'“Yes, I find the journals very interesting and helpful – there are always little tricks in Excel which can trip you up. I especially like the use of quick ways of doing things – they allow me to become more productive.”',
    author:'Malcolm Ellis, Finance Manager, Birthright Hawke’s Bay Child & Family Care',
  }
];
  const sampleImgClick = ()=>setTimeout(()=>{const response={file:'http://ableowl.net/wp-content/uploads/2017/07/ExcelTipsJournalSampleUS.pdf'}; window.open(response.file);},1);
  const upperSubscription=(
    <div className={style.row}>

      <div className={style.colMd5}>
      <ListItem ulStyle={style.hireHeading} items={items} />
             <div className={style.sampleImg}><a href="" onClick={sampleImgClick}><img src={media.journalImg} alt="sample"/></a> <button className={style.sampleBth} onClick={()=>setTimeout(()=>{const response={file:'http://ableowl.net/wp-content/uploads/2017/07/ExcelTipsJournalSampleUS.pdf'}; window.open(response.file);},1000)}>open sample pdf</button></div>
           </div>
           <div className={style.colMd7}>
           <UpperSubscriptionForm />
             <div className={style.journalVideo}>
               <h2>sample video</h2>
              <div className={style.video} > <iframe style={{height:'280px'}} className='sproutvideo-player' src={media.sampleVideo}  frameBorder='0' allowFullScreen={true} width='100%'></iframe></div>
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
           	<div className={style.colMd3} style={{textAlign:'center'}}><img src={media.owlJournalImg} alt="img" className={style.imgOwl}/></div>
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
