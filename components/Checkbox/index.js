import React, { useId } from 'react';
import style from './Checkbox.module.scss';

const Checkbox = ({ label, children, disabled, checked, setChecked }) => {
  const id = useId();
  return (
    <div className={style.container}>
      <input
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        id={id}
        className={style.custom_checkbox}
        type="checkbox"
        disabled={disabled}
      />
      <label htmlFor={id} className={style.label}>
        {children || label}
      </label>
    </div>
  );
};

export default Checkbox;
