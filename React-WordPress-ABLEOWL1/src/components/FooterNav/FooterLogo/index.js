import React from 'react';
import style from '../style';

function FooterLogo(){

  return(
    <div className={style.logoFooter}>
    <a className={style.logoStyle}>
    <img src={style.logoUrl} alt={style.logoAlt}/>
    </a>
    </div>
  );

}

export default FooterLogo;
