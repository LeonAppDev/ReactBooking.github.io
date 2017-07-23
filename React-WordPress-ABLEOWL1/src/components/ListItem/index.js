import React from 'react';
import style from './style';
import renderHTML from 'react-render-html';


function ListItem({ulStyle,items}){


   return(
     <ul className={ulStyle}>
     {items.map(item=><li><span><i aria-hidden="true" className={style.iStyle}></i></span>{renderHTML(item)}</li>)}
     </ul>
   );
}


export default ListItem;
