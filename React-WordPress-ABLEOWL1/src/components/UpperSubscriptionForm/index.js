import React from 'react';
import style from './style';
import image from './image';
import renderHTML from 'react-render-html';
import SFNorthAmerica from './SFNorthAmerica';

function SubscriptionForm(){

return(
    <div>
    {renderHTML(SFNorthAmerica)}
    </div>
)


}

export default SubscriptionForm;
