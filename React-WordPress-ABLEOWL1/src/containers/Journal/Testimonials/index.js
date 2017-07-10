import React from 'react';
import style from './style';

function Testimonials({testimonialItems}){

  return(

      <div className={style.colMd9}>
        <h2>Testimonials</h2>
       {testimonialItems.map(testimonial=><div className={style.testi}><p>{testimonial.word}</p><span>{testimonial.author}</span></div>)}
     </div>

  )
}

export default Testimonials;
