import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Majestic Hotels</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Rooms</Link>
          </li>
          <li>
            <Link href="/new-room">Add New Room</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
