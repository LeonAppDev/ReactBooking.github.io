import React,{Component}from 'react';
import style from './style';
import media from './media';
import Paragraph from 'components/Paragraph';
import ListItem from 'components/ListItem';
import SubscriptionForm from 'components/SubscriptionForm';


function AboutList({aboutItems}){

  return(

   <div className={style.hireHeading}>

   {aboutItems.map(aboutItem=><div><ListItem items={aboutItem.items}/><div style={{marginTop:'30px',marginBottom:'60px',textAlign:'center'}}><img src={aboutItem.img}/></div></div>)}
   </div>
  )
}


function AboutPage(){

  const paragraphItems=[{title:'',contents:['AbleOwl are a centre of expertise in Microsoft Excel.'],img:''},
                 ];
  const aboutItems=[{items:['30+ years experience in creating Excel application for clients'],img:media.expertImg},
                    {items:['Certified professional in Excel for finance study and qualification.'],img:media.coatofarmImg},
                    {items:['60 1-hour webinar recordings with detailed manuals all at a level above beginner.'],img:media.webinarImg},
                      {items:['Broadest range of over 20 Excel courses.'],img:media.homeTrainingImg},
                        {items:['ESP (Excel Standardisation Programme): A set of conventions, standard components and tools \
                        to rapidly develop Excel applications. Utilise the free GenieMini add-in to implement that and do the free online course.'],img:media.genieImg},
                      {items:['Hotline support.'],img:media.listenerImg},
                  ];



return(
  <section id={style.contentWrap}>
  <div className={style.container}>
       <div className={style.process}>
         <h1>About AbleOwl</h1>
         <Paragraph paragraphItems={paragraphItems} />

        <h4>ABLEOWL PROVIDE</h4>
       <AboutList aboutItems={aboutItems} />

      </div>
   </div>
 <SubscriptionForm />
</section>
)

}

export default AboutPage;
