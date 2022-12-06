import { FC } from 'react';
import style from './HomePage.module.scss';
import Header from '../components/Header';

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <h2 className={style.title}>HomePage</h2>
      </div>
    </>
  );
};

export default HomePage;
