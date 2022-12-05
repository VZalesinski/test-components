import Switch from 'react-switch';
import style from './Toggle.module.scss';

const Toggle = ({ text, checked, setChecked }) => {
  return (
    <label className={style.label}>
      <span className={style.span}>{text}</span>
      <Switch
        onChange={setChecked}
        checked={checked}
        uncheckedIcon={null}
        checkedIcon={null}
      />
    </label>
  );
};

export default Toggle;
