import Image from 'next/image';
import { useState } from 'react';
import style from './Dialog.module.scss';

const Dialog = ({ collection, title }) => {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>{title}</p>
      <div className={style.grid}>
        {collection.map((item, index) => (
          <button
            className={
              item.active ? `${style.button} ${style.active}` : style.button
            }
            key={index}
            onClick={() => item.setActive(!item.active)}
          >
            {item.img && <Image src={item.img} className={style.img} />}
            {item.text && <span>{item.text}</span>}
          </button>
        ))}
      </div>

      <div className={style.flex}>
        <div className={style.wrapper__button}>
          <button className={style.button}>Back</button>
        </div>
        <div className={style.wrapper__button}>
          <button className={style.button}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
