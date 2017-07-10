import React from 'react';
import style from './style';
import image from './image';
import ListItem from 'components/ListItem';
import SubscriptionForm from 'components/SubscriptionForm';



function HomePage() {

    const items=['With 30 years\' specialisation, be assured of continuity of support and commitment.','We are not a freelancers portal.',
    'Be confident that you engage top-level, efficient consultants.',
    'Have applications built with standard components and conventions, which help with productivity, robustness and maintainability.'];

  const container=(
    <div className={style.container}>
    <div className={style.mainSec}>
   <div className={style.hireHeading}>
    <h2>Hire a specialist Excel company</h2>
    <p>We build custom applications in Excel and improve your existing spreadsheets.</p>
    <ListItem items={items} />
     </div>
    <div className={style.expertImg}><img src={image.expertImg}/></div>
    <div className={style.textSection}>
    <p>For case studies, see the <span>Case studies page.</span></p>
					<p>For the development process, see <span>The Process</span> page.</p>
					<p>For a full list of what we do with Excel see the <span>About</span> page.</p>
					<p>To contact us with your requirement, see the <span>Contact</span> page.</p>
					<p>To get the free Excel case studies and tips journal, subscribe on the <span>Journal</span> page.</p>
          </div>
    </div>
    </div>
  );

  return (
    <section id={style.contentWrap}>
    {container}
    <SubscriptionForm />
    </section>
  );
}

export default HomePage;
