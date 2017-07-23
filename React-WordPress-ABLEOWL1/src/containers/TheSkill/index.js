import React,{Component}from 'react';
import style from './style';
import media from './media';
import Paragraph from 'components/Paragraph';
import SubscriptionForm from 'components/SubscriptionForm';


function TheSkill(){

  const paragraphItems=[{title:'',contents:['Excel has a huge number of features that a developer can use in creating an application.\
      <b>Knowing all the features enables rapid development</b>. Some features work much better than others for certain requirements.\
       ','Some features, such as Conditional Formatting, that work well at a small scale but not at large scale. Some features are\
       slow or not so reliable and, therefore, are usually best avoided.'],img:media.toolImg},
      {title:'',contents:['So, while simple applications don\'t need great skill, more complicated and larger scale ones do. <b>Paul Oulton,\
      the principal consultant of AbleOwl, has 30 years specialisation</b> with Excel. He works with the younger consultants to review the\
      approaches they plan to use and directs them to other approaches if need be.'],img:media.expertImg},
          {title:'',contents:['Some applications benefit from not storing data on spreadsheets but in a database instead. \
          In that way, there is only <b>one source for a particular value,</b> which is easily extracted to a spreadsheet that needs it.',
          'Such transfer of data to and from a database, transparent to the user, needs additional skill beyond that of Excel alone.'],img:media.databaseImg},
              {title:'',contents:['Emailing updated versions of spreadsheets can result in users working off outdated versions. That issue is easily solved by us \
              by using an external database to store the latest spreadsheet <b>versions, which, transparent to the user, update automatically</b> when they open an application.',
              '<b>People move on</b> and another at AbleOwl or the client company needs to continue with certain applications. That task is difficult if each developer applies their own or no conventions. \
              So, all applications developed by AbleOwl use the ESP conventions.'],img:media.exitImg},
                  {title:'',contents:['In addition to making the application easier to understand for others, <b>ESP conventions and standard components</b> enable much greater development and usage productivity.',
                  'For more information on ESP, see the <a href="/onlinecourse" >free online course</a> and learn in detail with part 1 of <a href="/qualification" >the Certified Professional in Excel for Finance study and qualification</a>.',
                'An understanding of the different functions of a business such as <b>Finance, Operations, HR, Marketing, Sales, Engineering, R&D, Production, Purchasing, Admin, IT</b> and so on helps.',
                'After many of years of creating a wide variety of applications for different functions, we have gained an understanding of many functional areas.'],img:media.hatallImg},
                 ];


return(
  <section id={style.contentWrap}>
  <div className={style.container}>
       <div className={style.process}>
         <h1>Many skills are needed for successful projects</h1>
         <Paragraph paragraphItems={paragraphItems} />
      </div>
   </div>
 <SubscriptionForm />
</section>
)

}

export default TheSkill;
