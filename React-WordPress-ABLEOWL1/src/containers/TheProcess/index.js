import React,{Component}from 'react';
import style from './style';
import media from './media';
import Paragraph from 'components/Paragraph';
import SubscriptionForm from 'components/SubscriptionForm';


function Process(){

  const paragraphItems=[{title:'INITIAL FREE CONSULATION',contents:['Give us the outline of what you need and we will give\
      you an indication of pricing for different options. During this consulation process,\
      you might email us documents and files or you may explain and show us what you need in an online meeting.'],img:media.doctorImg},
      {title:'STAGE 1 - ANALYSIS AND DESIGN',contents:['The devil is in the detail. We need to ask you lots of questions about the detail. The process often reveals\
      items overlooked in the initial discussions. At the end of this stage,\
       we should be able to provide you a reasonably accurate estimate for development. ','Accurate for custom IT developments is normally\
       within 25%. There may be alternative designs and options, which we will also provide estimates for. Unless the requirement is simple,\
        there is much work in this critical stage and we need to charge for it. We will provide a rough estimate for this stage.'],img:media.scienceImg},
          {title:'STAGE 2 - DEVELOPMENT',contents:['We develop the application, provide you with instruction and let you test. We make fixes and changes as required.'],img:media.padlImg},
              {title:'STAGE 3 - ONGOING SUPPORT',contents:['Applications have a settling in period in which issues arrive. We normally get online, view any issue on your computer and fix it then.'],img:media.listenerImg},
                 ];


return(
  <section id={style.contentWrap}>
  <div className={style.container}>
       <div className={style.process}>
         <h1>Typically, there are four steps to a project</h1>
         <Paragraph paragraphItems={paragraphItems} />
      </div>
   </div>
 <SubscriptionForm />
</section>
)

}

export default Process;
