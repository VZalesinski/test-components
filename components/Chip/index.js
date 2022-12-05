import Image from 'next/image';
import style from './Chip.module.scss';

const Chip = ({ img, text, outlined }) => {
  return (
    <div
      className={
        outlined ? `${style.wrapper} ${style.outlined}` : style.wrapper
      }
    >
      {img && <Image src={img} className={style.img} />}
      {text && <span className={style.text}>{text}</span>}
    </div>
  );
};

export default Chip;
