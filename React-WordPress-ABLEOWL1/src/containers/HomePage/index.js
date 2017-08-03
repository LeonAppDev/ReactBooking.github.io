import React from 'react';
import style from './style';
import image from './image';
import ListItem from 'components/ListItem';
import SubscriptionForm from 'components/SubscriptionForm';
import { Link } from 'react-router-dom';



function HomePage() {

    const items=['With 30 years\' specialization, be assured of continuity of support and commitment.','We are not a freelancers portal.',
    'Be confident that you engage top-level, efficient Excel expert consultants, Excel VBA programmers and developers.',
    'Have applications built with standard components and conventions, which help with productivity, robustness and maintainability.'];

    const handleClick = ()=>window.scrollTo(0, 0);

  const container=(
    <div className={style.container}>
    <div className={style.mainSec}>
   <div className={style.hireHeading}>
    <h2>Hire a specialist Excel company</h2>
    <p>We build custom applications in Excel/VBA macro programming and improve your existing spreadsheets.</p>
    <ListItem items={items} />
     </div>
    <div className={style.expertImg}><img src={image.expertImg}/></div>
    <div className={style.textSection}>
    <p>For case studies, see the <span><Link to='casestudies' onClick={handleClick}>Case studies page.</Link></span></p>
					<p>For the development process, see <span><Link to='theprocess' onClick={handleClick}>The Process</Link></span> page.</p>
					<p>For a full list of what we do with Excel see the <span><Link to='about' onClick={handleClick}>About</Link></span> page.</p>
					<p>To contact us with your requirement, see the <span><Link to='contact' onClick={handleClick}>Contact</Link></span> page.</p>
					<p>To get the free Excel case studies and tips journal, subscribe on the <span><Link to='journal' onClick={handleClick}>Journal</Link></span> page.</p>
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
