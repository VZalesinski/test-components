import Image from 'next/image';
import style from './Button.module.scss';

const Button = ({
  text,
  disable = false,
  colorsPalette = null,
  handler,
  size = null,
  iconLeft = null,
  iconRight = null,
  outlined = false,
  round = false,
  small
}) => {
  function stylesOut() {
    let st = Object.assign({}, size, colorsPalette);
    return st;
  }

  function classOut() {
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
      onClick={!disable ? handler : null}
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
