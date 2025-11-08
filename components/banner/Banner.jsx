import './banner.scss';
import banner from '../../pics/hero.svg';

export default function Banner() {
  return (
    <section className='banner'>
        <img src={banner} alt="banner" />
    </section>
  )
}
