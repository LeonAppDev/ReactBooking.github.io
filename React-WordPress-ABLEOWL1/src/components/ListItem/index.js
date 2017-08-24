import React from 'react';
import style from './style';
import renderHTML from 'react-render-html';


function ListItem({ulStyle,items}){


   return(
     <table>
     {items.map(item=><tr><td style={{verticalAlign:'top'}}><span><i aria-hidden="true" className={style.iStyle}></i></span></td><td style={{paddingBottom:'10px'}}>{renderHTML(item)}</td></tr>)}
     </table>
   );
}

export default ListItem;
