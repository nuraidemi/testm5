import './newFlower.scss';
import picture from '../../pics/3.svg';

export default function Picture() {
  return (
    <section className='picture'>
      <div className="new-flower-container">
        <img src={picture} alt="picture"/>
      </div>
    </section>
  );
}
