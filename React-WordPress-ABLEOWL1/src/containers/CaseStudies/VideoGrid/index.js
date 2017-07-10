import React from 'react';
import videos from './videos';
import style from './style';

function Video({content})
{

  return(

    <div className={style.elementClass}>
    <span className={style.videoTitle}>{content.title}</span>
    <div className={style.video}><img src={content.img}/></div>
	  <span className={style.videoDesc}>{content.videoDesc}</span>
		<span className={style.name}>{content.name}</span>
		<span className={style.place}>{content.place}</span>
		<button className={style.downloadBtn}>DOWNLOAD PDF</button>
    </div>
  )

}

function VideoGrid(){

   return(
     <div className={style.row}>
     { videos.map(video=><Video content={video} />)}
     </div>
   )


}


export default VideoGrid
