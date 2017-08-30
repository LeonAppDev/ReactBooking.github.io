import React,{Component}from 'react';
import style from './style';
import media from './media';
import Paragraph from 'components/Paragraph';
import ListItem from 'components/ListItem';
import SubscriptionForm from 'components/SubscriptionForm';
import renderHTML from 'react-render-html';


function AboutList({aboutItems}){



  return(

   <div className={style.hireHeading}>

   {aboutItems.map(aboutItem=><div>{
    <table>{aboutItem.items.map(item=><tr><td style={{verticalAlign:'top'}}><span><i aria-hidden="true" className={style.iStyle}></i></span></td><td>{renderHTML(item)}</td></tr>)}
    </table>}<div style={{marginTop:'30px',marginBottom:'60px',textAlign:'center'}}><img src={aboutItem.img} className={aboutItem.imgStyle}/></div></div>)}
   </div>
  )
}



function AboutPage(){

  const paragraphItems=[{title:'',contents:['AbleOwl are a centre of expertise in Microsoft Excel.'],img:''},
                 ];
  const aboutItems=[{items:['30+ years experience in creating Excel applications for clients'],img:media.expertImg,imgStyle:style.wideImg},
                    {items:['<a href="/qualification">Certified professional in Excel for finance </a>study and qualification.'],img:media.coatofarmImg,imgStyle:style.highImg},
                    {items:['<a href="/webinarecordings">60 1-hour webinar recordings</a> with detailed manuals all at a level above beginner.'],img:media.webinarImg,imgStyle:style.highImg},
                      {items:['Broadest range of over <a href="/excelcourse">20 Excel courses</a>.'],img:media.homeTrainingImg,imgStyle:style.highImg},
                        {items:['ESP (Excel Standardisation Programme): A set of conventions, standard components and tools \
                        to rapidly develop Excel applications. Utilise the free <a href="/geniemini">GenieMini</a> add-in to implement that and do the <a href="/onlinecourse">free online course</a>.'],img:media.genieImg,imgStyle:style.highImg},
                      {items:['<a href="/hotline">Hotline support.</a>'],img:media.listenerImg,imgStyle:style.smallerImg},
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
