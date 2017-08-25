import React from 'react';
import style from './style';
import renderHTML from 'react-render-html';


function Paragraph({paragraphItems}){

const wideImgArray= ['illus-owl-experts.png','illus-owl-hatall.png',];
const smallerImgArray = ['illus-owl-doctor.png','illus-owl-support.png'];

const verifyImgClass = imgURL=>{

 let isWide = false;
 let isSmaller = false;
wideImgArray.map(imgName=>{ if(imgURL.includes(imgName)) isWide = true});
smallerImgArray.map(imgName=>{ if(imgURL.includes(imgName)) isSmaller = true});
  return isWide?style.wideImg:(isSmaller?style.smallerImg:style.highImg);
}

return(
  <div>
  {paragraphItems.map(paragraphItem =><div><h4>{paragraphItem.title}</h4>{paragraphItem.contents.map(content=><p>{renderHTML(content)}</p>)}
   {paragraphItem.img?<div className={style.expertImg}><img src={paragraphItem.img} className={verifyImgClass(paragraphItem.img)}/></div>:null}</div>)}
  </div>
);

}


export default Paragraph;
