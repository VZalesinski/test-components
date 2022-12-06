import Image from 'next/image';
import { FC } from 'react';
import style from './Chip.module.scss';
import { ChipPropsType } from './types';

const Chip: FC<ChipPropsType> = ({ img, text, outlined }) => {
  return (
    <div
      className={
        outlined ? `${style.wrapper} ${style.outlined}` : style.wrapper
      }
    >
      {img && <Image src={img} className={style.img} alt="" />}
      {text && <span className={style.text}>{text}</span>}
    </div>
  );
};

export default Chip;
