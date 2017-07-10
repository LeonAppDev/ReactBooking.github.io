import React from 'react';
import style from './style';


function ListItem({ulStyle,items}){


   return(
     <ul className={ulStyle}>
     {items.map(item=><li><span><i aria-hidden="true" className={style.iStyle}></i></span>{item}</li>)}
     </ul>
   );
}


export default ListItem;
