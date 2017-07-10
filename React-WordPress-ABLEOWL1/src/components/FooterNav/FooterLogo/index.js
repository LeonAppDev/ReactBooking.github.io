import React from 'react';
import style from '../style';

function FooterLogo(){

  return(
    <div className={style.logoFooter}>
    <img src={style.logoUrl} alt={style.logoAlt}/>
    </div>
  );

}

export default FooterLogo;
