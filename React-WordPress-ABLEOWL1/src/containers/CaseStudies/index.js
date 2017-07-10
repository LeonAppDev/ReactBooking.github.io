import React from 'react';
import style from './style';
import media from './media';
import SubscriptionForm from 'components/SubscriptionForm';
import ListItem from 'components/ListItem';
import VideoGrid from './VideoGrid';




function CaseStudies() {

  const items=['Project financial analysis','Safety stock calculation interfacing with ERP',
               'Hotels financial reporting and budgeting','Trial Balance download and reporting',
               'License revenue calculations for a local body','Import of text files and manipulation of the data',
               'Loan finance repayments calculator','Payroll budget',
               'Container loadout document from scanned barcodes','Phone company payments model',
               ];
   return(
     <section id={style.contentWrap}>
     <div className={style.container}>
     <div className={style.testimonial}>
     <h2>See the capability of Excel for a wide range of applications </h2>
     <p>The capability is far more than most people are aware of.</p>
     <VideoGrid />
     </div>
     </div>
     <div className={style.greyHire}>
     <div className={style.mainSec}>
     <h2>Other Uses</h2>
     <p>There are many varied other projects, which you could speak to our clients about.</p>
     <h4>THE PROJECTS INCLUDE</h4>
     <ListItem items={items}/>
     </div>
     </div>
     <SubscriptionForm/>
     </section>
   );

}

export default CaseStudies;
