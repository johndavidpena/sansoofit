import { useRef } from 'react';
import Link from 'next/link';
import MHstyles from './MH.module.css';
import Burger from '../Burger';
import Home from '../Home';
import { useOnClickOutside } from '../../hooks/burgerHook';

const MobHeader = ({ open, setOpen }) => {
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <nav className={MHstyles.burger}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Home open={open} setOpen={setOpen} />
      </div>

      <div className={MHstyles.nameContainer}>
        <Link href='/'>
          <a>
            <span className={MHstyles.firstName}>sansoo</span>
            <span aria-hidden="true" className={MHstyles.period}>.</span>
            <span className={MHstyles.lastName}>fit
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default MobHeader;