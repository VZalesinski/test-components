import style from './Form.module.scss';

const Form = ({ children }) => {
  return <form className={style.form}>{children}</form>;
};

export default Form;
