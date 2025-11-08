import './App.css';
import Header from '../components/header/Header.jsx';
import Banner from '../components/banner/Banner.jsx';
import Flowers from '../components/flowers/Flowers.jsx';
import NewFlower from '../components/newFlower/NewFlower.jsx';
import FeedBack from '../components/feedBack/FeedBack.jsx';
import Footer from '../components/footer/Footer.jsx';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Banner />
      <Flowers />
      <NewFlower />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default App; 