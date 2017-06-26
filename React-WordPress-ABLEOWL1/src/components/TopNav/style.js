import React,{Component} from 'react';

function styleTopNav(imageSrc){

  const navClass = ['navbar ','navbar-default ','navbar-fixed-top ','header-bg'].join('');
  const container = 'container-fluid';
  const navHeader = 'navbar-header';
  const navButton = ['navbar-toggle ','collapsed'].join('');
  const navMain='nav-main';
  const navList = ['navbar-collapse ','collapse'].join('');
  const ulNav = ['nav ','navbar-nav'].join('');
  const logoStyle = 'navbar-brand';

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

return(
  <nav className={navClass}>
  <div className={container}>
  <div className={navHeader}>
  <button className={navButton}>
  {spanGroup}
  </button>
  <a className={logoStyle}>
  <img src={imageSrc}/>
  </a>
  </div>
  <div className={navMain}>
  <div className={navList}>
  <ul className={ulNav}>
  </ul>
  </div>
  </div>
  </div>
  </nav>);
}

export default styleTopNav
