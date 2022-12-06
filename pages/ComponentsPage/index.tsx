import { FC, useState } from 'react';
import style from './ComponentsPage.module.scss';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Card from '../../components/Card';
import Checkbox from '../../components/Checkbox';
import Toggle from '../../components/Toggle';
import Chip from '../../components/Chip';
import Dialog from '../../components/Dialog';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { COLORS } from '../../utils/index';

import geoIcon from '../../assets/icons/geo.svg';
import Linkedin from '../../assets/icons/linkedIn.svg';

const ComponentsPage: FC = () => {
  const [checked1, setChecked1] = useState<boolean>(false);
  const [checked2, setChecked2] = useState<boolean>(false);
  const [checked3, setChecked3] = useState<boolean>(false);
  const [checked4, setChecked4] = useState<boolean>(false);
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <h2>Components page</h2>
        <p>Just a simple page where I was building all components</p>
        <p> Buttons</p>
        <Button text="кнопка 1" size={{ width: '200px', height: '50px' }} />

        <Button
          text="кнопка 2"
          disable
          size={{ width: '200px', height: '50px' }}
        />

        <Button
          text="кнопка 3"
          outlined
          round
          size={{ width: '150px', height: '40px' }}
          colorsPalette={{ color: COLORS.green }}
        />

        <div>
          <Button
            text="кнопка 4"
            outlined
            small
            iconLeft={geoIcon}
            iconRight={Linkedin}
          />
        </div>

        <p className={style.block}>Inputs</p>

        <div className={style.form__wrapper}>
          <Form>
            <Input title="login" required type="text" />
            <Input title="password" required type="password" />
          </Form>
        </div>

        <p>Card</p>
        <Card maxWidth={'400px'} />

        <p>Chip</p>
        <Chip text="back" img={Linkedin} />
        <Chip text="back" outlined />
        <Chip img={Linkedin} />

        <p>Dialog</p>
        <Dialog
          title="What type of work would you like to do?"
          collection={[
            {
              text: 'Regular cleaning',
              img: Linkedin,
              active: checked1,
              setActive: setChecked1
            },
            {
              text: 'Window cleaning',
              img: Linkedin,
              active: checked2,
              setActive: setChecked2
            },
            {
              text: 'After repairing',
              img: Linkedin,
              active: checked3,
              setActive: setChecked3
            },
            {
              text: 'After relocating',
              img: Linkedin,
              active: checked4,
              setActive: setChecked4
            }
          ]}
        />
      </div>
    </>
  );
};

export default ComponentsPage;
