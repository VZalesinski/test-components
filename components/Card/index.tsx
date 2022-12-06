import { FC, useState } from 'react';
import style from './Card.module.scss';
import Toggle from '../../components/Toggle';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import { CardPropsType } from './types';

const Card: FC<CardPropsType> = ({ maxWidth }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [checked2, setChecked2] = useState<boolean>(false);
  const [checked3, setChecked3] = useState<boolean>(false);
  const [checked4, setChecked4] = useState<boolean>(false);

  return (
    <div style={{ maxWidth: maxWidth }} className={style.wrapper}>
      <Checkbox checked={checked} setChecked={setChecked}>
        Google Authenication
      </Checkbox>
      {checked && <Input title="email" type="text" />}

      <Checkbox checked={checked2} setChecked={setChecked2}>
        Google Two Factor
      </Checkbox>
      {checked2 && <Input title="two factor" type="text" />}

      <Checkbox checked={checked3} setChecked={setChecked3}>
        Security key
      </Checkbox>
      {checked3 && <Input title="security key" type="password" />}

      <Toggle checked={checked4} setChecked={setChecked4} text="dcd" />
    </div>
  );
};

export default Card;
