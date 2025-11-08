import './header.scss';
import Logo from '../../pics/logo.svg';
import Log from '../../pics/log-in.svg';
import Search from '../../pics/search.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header_logo">
        <img src={Logo} alt="logo"/>
      </div>

      <nav className="header_nav">
        <ul>
          <li>Каталог</li>
          <li>Галерея</li>
          <li>О лаборатории</li>
          <li>Контакты</li>
        </ul>
      </nav>

      <div className="header_icons">
        <img src={Search} alt="Поиск" />
        <img src={Log} alt="Войти" />
      </div>
    </header>
  );
}


