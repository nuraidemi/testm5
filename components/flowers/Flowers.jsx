import './flowers.scss';
import plant from '../../pics/Layer 3.svg';
import and from "../../pics/Group 205.svg";


export default function Flowers() {
  return (
    <section className="flowers">
      <div className="flowers-grid">
        <div className="flower-card">
          <div className="flower-img-wrapper">
          <img src={plant} alt="plant" className="flower-img" /></div>
          <h3>Fig. 1 (plant)</h3>
          <p>Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.</p>
          <button>Подробнее</button>
        </div>

        <div className="flower-card">
          <div className="flower-img-wrapper">
          <img src={plant} alt="flower" className="flower-img" /></div>
          <h3>Fig. 2 (flower)</h3>
          <p>Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.</p>
          <button>Подробнее</button>
        </div>

        <div className="flower-card">
          <div className="flower-img-wrapper">
          <img src={plant} alt="leaf" className="flower-img" /></div>
          <h3>Fig. 3 (leaf)</h3>
          <p>Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.</p>
          <button>Подробнее</button>
        </div>

        <div className="flower-card">
          <div className="flower-img-wrapper">
          <img src={plant} alt="wood" className="flower-img" /></div>
          <h3>Fig. 4 (wood)</h3>
          <p>Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.</p>
          <button>Подробнее</button>
        </div>
      </div>
      <div className="and">
        <br />
        <br />
        <img src={and} alt="" />
      </div>
    </section>
  );
}
