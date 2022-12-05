import style from './Header.module.scss';
import Link from 'next/link';
import Button from '../Button';
import Chip from '../Chip';

import linkedIn from '../../assets/icons/linkedIn.svg';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.block}>
        <Link href="/">
          <Button text="home-page" outlined />
        </Link>

        <Link href="/ComponentsPage">
          <Button text="components-page" outlined />
        </Link>
      </div>

      <div className={style.block}>
        <p>My Linkedin:</p>
        <Link href="https://www.linkedin.com/in/vlad-zalesinski-205449203/">
          <Chip img={linkedIn} outlined />
        </Link>
      </div>
    </header>
  );
};

export default Header;
