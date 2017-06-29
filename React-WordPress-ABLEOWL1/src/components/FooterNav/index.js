import React from 'react';
import style from './style';

function FooterNav() {
  const videoType = 'video/mp4';
  const videoSrc = 'https://ableowl.vids.io/videos/a49bdcb91019e4c22c/ableowl-720p-mov';
    return (
  <div>
  <section id={style.contentWrap}>

	</section>
    <footer>
    <div className={style.footerTop}>
			<div className={style.logoFooter}>
      <a className={style.logoStyle}>
      <img src={style.logoUrl} alt={style.logoAlt}/>
      </a>
      </div>
      <div className={style.footerNav}>
				<ul>
					<li>
						<a href="#">case studies</a>
					</li>
					<li>
						<a href="#">the process</a>
					</li>
					<li>
						<a href="#">the skill</a>
					</li>
					<li>
						<a href="#">the case for excel</a>
					</li>
					<li>
						<a href="#">contact</a>
					</li>
					<li>
						<a href="#">about</a>
					</li>
				</ul>
			</div>
		</div>
		<div className={style.footerBot}>
					Copyright © {Date.year},<span><a href={style.homePage}>AbleOwl</a>.</span>All Rights Reserved. v1.0
		</div>
    <video controls>
    <source src={videoSrc} type={videoType}/>
    Your browser does not support HTML5 video.
    </video>
	  </footer>
    </div>
    );
}

export default FooterNav;
