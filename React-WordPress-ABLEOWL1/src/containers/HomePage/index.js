import React from 'react';
import style from './style';

function HomePage() {
  const content=(
    <div className={style.hireUs}>
    Hire a specialist Excel company
    </div>
  );
  return (
    <section id={style.contentWrap}>
    {content}
    </section>
  );
}

export default HomePage;
