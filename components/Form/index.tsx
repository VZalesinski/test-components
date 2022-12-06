import { FC } from 'react';
import style from './Form.module.scss';
import { FormPropsType } from './types';

const Form: FC<FormPropsType> = ({ children }) => {
  return <form className={style.form}>{children}</form>;
};

export default Form;
