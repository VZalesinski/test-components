import React, { FC, useState } from 'react';
import style from './Input.module.scss';
import { GetType, InputPropsType } from './types';

const Input: FC<InputPropsType> = React.forwardRef(
  (
    {
      value,
      onChange = () => {},
      title = '',
      width,
      height,
      required = false,
      type = 'text',
      minValue,
      maxValue,
      maxLength,
      maxFloatLength,
      error = '',
      disabled = false,
      greyBg = false,
      ...props
    },
    ref
  ) => {
    const [isRevealPwd, setIsRevealPwd] = useState<boolean>(false);

    const handleChange = e => {
      const value = e.target.value;

      if (value !== '' && type === 'number') {
        const formatNumber = (updValue = value) => {
          console.log(updValue);
          if (
            updValue.length === 2 &&
            updValue[0] === '0' &&
            updValue !== '0.'
          ) {
            onChange({
              target: { value: updValue.substr(1, updValue.length - 1) }
            });
          } else {
            onChange({ target: { value: updValue } });
          }
        };

        const splitted = value.split('.');
        const REGEX = /^[0-9]*\.?[0-9]*$/;

        if (REGEX.test(value) && (!maxLength || value.length <= maxLength)) {
          if (splitted.length === 1 && value === '00') return;
          if (parseFloat(value) !== 0 && minValue && +value < +minValue) {
            onChange({ target: { value: minValue } });
          } else if (maxValue && +value > +maxValue) {
            onChange({ target: { value: maxValue } });
          } else if (maxFloatLength) {
            if (
              splitted.length <= 1 ||
              splitted[splitted.length - 1].length <= maxFloatLength
            ) {
              formatNumber();
            }
          } else if (maxFloatLength === 0) {
            console.log(splitted);
            formatNumber(splitted[0]);
          } else {
            formatNumber();
          }
        }
      } else {
        onChange && onChange(e);
      }
    };

    const getType: GetType = type => (type === 'number' ? 'tel' : type);

    const styleOut = { width: width, height: height };
    const star = !required ? '' : '*';
    const isPassword = type === 'password';

    return (
      <div
        style={styleOut}
        className={`${style.form_control}${
          error ? ` ${style.form_error}` : ''
        }${greyBg ? ` ${style.form_disabled}` : ''}`}
      >
        <div className={style.container}>
          <input
            value={value}
            onChange={handleChange}
            type={
              isPassword ? (isRevealPwd ? 'text' : 'password') : getType(type)
            }
            className={isPassword ? style.password : undefined}
            required
            disabled={disabled}
            {...props}
          />
          <label>
            {title}
            <span className={style.star}>{star}</span>
          </label>
        </div>
        <div className={style.error_message}>{error}</div>
      </div>
    );
  }
);

export default Input;
