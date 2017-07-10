import React,{Component}from 'react';
import style from './style';
import media from './media';
import Paragraph from 'components/Paragraph';
import ListItem from 'components/ListItem';
import SubscriptionForm from 'components/SubscriptionForm';


function ExcelAdvantage(){

  const paragraphItems=[{title:'',contents:['Excel applications developed by experienced Excel IT professionals are a world apart from those developed by users.','There are sometimes the needs below, which users would have difficulty implementing:'],img:''},
                 ];

    const items1=['If there is a need for a single data repositry accessible from multiple locations, Excel can implement that by using \
    a database such as SQL Server as a back end. Such databases can be rented cheaply in the cloud.'];
     const items2=['In a multi-user application, there can be a need to provide application updates automatically, that is, not by emailing updates.',
                    'Securing an application from unwanted change or access.'];
    const items3=['Because of its extensive functionality, the applications developed in Excel are sophisticated.','Excel provides long-term solutions due to its longetivity and stable platform.',
                                           'It is possible to allow users to make changes and additions that in other software would not be practicable.',
                                           'The speed and hence the cost of developing applications is a small fraction of that for other software.','Excel solutions have a minimal risk of failure in contrast to developments with other software.',
                                            'The total cost of Excel-based systems over the lifecycle is a small fraction of that of other software, while at the same time providing higher quality and flexibility.'];


return(
  <section id={style.contentWrap}>
  <div className={style.container}>
       <div className={style.process}>
         <h1>Excel outperforms other software</h1>
         <Paragraph paragraphItems={paragraphItems} />
         <div className={style.hireHeading}>
           <ListItem items={items1} />
            <div style={{marginTop:'30px',marginBottom:'60px',textAlign:'center'}} className={style.expertImg}><img src={media.excelIconImg}/></div>
            <ListItem items={items2} />
             <div style={{marginTop:'30px',marginBottom:'60px',textAlign:'center'}} className={style.expertImg}><img src={media.lockImg}/></div>
             <h4>BENEFITS OF EXCEL SOLUTIONS ARE MANY</h4>
             <ListItem items={items3}/>
             <div style={{marginTop:'30px',marginBottom:'60px',textAlign:'center'}} className={style.expertImg}><img src={media.graphImg}/></div>
           </div>
      </div>
   </div>
 <SubscriptionForm/>
</section>
)

}

export default ExcelAdvantage;
