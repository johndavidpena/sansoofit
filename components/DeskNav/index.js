import Link from 'next/link';
import NavStyles from './DeskNav.module.css';

const DeskNav = () => (
  <div>
    <ul className={NavStyles.navigation}>
      <li>
        <Link href='/'>
          <a>Landing</a>
        </Link>
      </li>
      <li>
        <Link href='/strength/index'>
          <a>Strength</a>
        </Link>
      </li>
      <li>
        <Link href='/power/index'>
          <a>Power</a>
        </Link>
      </li>
      <li>
        <Link href='/mobility/index'>
          <a>Mobility</a>
        </Link>
      </li>
    </ul>

    <div className={NavStyles.nameContainer}>
      <Link href='/'>
        <a>
          <span className={NavStyles.firstName}>sansoo</span>
          <span aria-hidden="true" className={NavStyles.period}>.</span>
          <span className={NavStyles.lastName}>fit
          </span>
        </a>
      </Link>
    </div>
  </div>
);

export default DeskNav;
