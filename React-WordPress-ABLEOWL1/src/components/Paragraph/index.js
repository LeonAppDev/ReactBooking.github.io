import React from 'react';
import style from './style';
import renderHTML from 'react-render-html';


function Paragraph({paragraphItems}){

return(
  <div>
  {paragraphItems.map(paragraphItem =><div><h4>{paragraphItem.title}</h4>{paragraphItem.contents.map(content=><p>{renderHTML(content)}</p>)}
   <div className={style.expertImg}><img src={paragraphItem.img}/></div></div>)}
  </div>
);

}


export default Paragraph;
