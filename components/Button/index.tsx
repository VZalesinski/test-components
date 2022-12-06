import { FC } from 'react';
import Image from 'next/image';
import style from './Button.module.scss';
import { ButtonPropsType, ButtonStylesOutType } from './types';

const Button: FC<ButtonPropsType> = ({
  text,
  disable,
  colorsPalette,
  handler,
  size,
  iconLeft,
  iconRight,
  outlined,
  round,
  small
}) => {
  function stylesOut(): ButtonStylesOutType {
    let st = Object.assign({}, size, colorsPalette);
    return st;
  }
  function classOut(): string {
    let st = [style.btn];
    outlined ? st.push(style.outlined) : st.push(style.main);
    if (disable) st.push(style.disable);
    if (round) st.push(style.round);
    if (small) st.push(style.small);

    return st.join(' ');
  }

  return (
    <button
      style={stylesOut()}
      onClick={!disable && handler ? handler : null}
      className={classOut()}
    >
      {iconLeft && (
        <Image
          src={iconLeft}
          className={`${style.icon} ${style.iconLeft}`}
          alt="icon"
        />
      )}
      {text}
      {iconRight && (
        <Image
          src={iconRight}
          className={`${style.icon} ${style.iconRight}`}
          alt="icon"
        />
      )}
    </button>
  );
};
export default Button;
