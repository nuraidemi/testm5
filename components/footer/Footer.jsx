import './footer.scss';
import youtube from '../../pics/youtube.png';
import instagram from '../../pics/instagramm.png';
import facebook from '../../pics/facebook.png';
import twitter from '../../pics/twitter.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="#">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="#">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="#">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="Twitter" />
        </a>
      </div>

      <div className="footer__divider"></div>

      <div className="footer_copy">
        <p className="footer__copy_p">f&b ® 2020</p>
      </div>
    </footer>
  );
}

