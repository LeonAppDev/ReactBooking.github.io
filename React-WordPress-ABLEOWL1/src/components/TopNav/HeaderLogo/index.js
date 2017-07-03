import React from 'react';
import style from './style';


function HeaderLogo(){

  var spanGroup=[];

        for (let i=0;i<4;i++)
        {
          let spanClass = '';
          if(i==0)
          {
          spanClass='sr-only';
          spanGroup.push(<span className={spanClass}>{'Toggle navigation'}</span>);
        }
        else
        {
          spanClass='icon-bar';
          spanGroup.push(<span className={spanClass}></span>);
        }
      }

  return (
      <div className={style.navHeader}>
      <button className={style.navButton}>
      {spanGroup}
      </button>
      <a className={style.logoStyle}>

      </a>
      </div>
  );
}
export default HeaderLogo;
