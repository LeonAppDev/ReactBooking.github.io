import React from 'react';
import videos from './videos';
import style from './style';




function Video({content,styleImg,styleButton,showImg,styleVideo})
{
    let video= null;
    if(showImg)
    {
       video=<div className={style.video} ><img src={content.src}  style={styleImg}/></div>;

    }
    else {
        video=  <div className={style.video} style={styleVideo}> <iframe className='sproutvideo-player' src={content.src}  frameBorder='0' allowFullScreen={true} width='100%'></iframe></div>;
    }

  return(

    <div className={style.elementClass}>
    <span className={style.videoTitle}>{content.title}</span>
      {video}
    <span className={style.videoDesc}>{content.videoDesc}</span>
		<span className={style.name}><p>{content.name}</p></span>
    <br/>
    <span className={style.place}><p>{content.place}</p></span>
		<button style={styleButton} className={style.downloadBtn} onClick={()=>setTimeout(()=>{const response={file:content.pdfFileUrl,}; window.open(response.file);},1000)}>DOWNLOAD PDF</button>
    </div>
  )

}

function VideoGrid(){

   return(


          <div className={style.row}>
     <Video content={videos[0]} />
     <Video content={videos[1]} styleButton={{marginTop:'14px'}}/>
     <Video content={videos[2]} styleButton={{marginTop:'38px'}} styleImg={{height:'150px'}} showImg={true} />
      <Video content={videos[3]} styleButton={{marginTop:'122px'}} styleImg={{height:'151px', marginTop:'28px'}} showImg={true}/>
       <Video content={videos[4]} styleVideo={{marginTop:'44px'}}/>
        <Video content={videos[5]} styleVideo={{marginTop:'21px'}}/>
         <Video content={videos[6]} />
          <Video content={videos[7]} styleButton={{marginTop:'83px'}}/>
           <Video content={videos[8]} styleButton={{marginTop:'83px'}}/>
     </div>
   )


}


export default VideoGrid
