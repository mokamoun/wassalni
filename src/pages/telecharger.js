import Header from '../comp/header';
import Footer from '../comp/Footer';
// import MainContent from '../comp/MainContent';
import img3 from '../image/ios.png';
import img4 from '../image/android.png';
import "../pages/telecharge.css"


const Telecharger = () => {
  return (
    <>
      <Header />


      <main className='img2'>
        
         <div className='blockTelecharge'>
          <a href="https://apps.apple.com/tn/app/e-wassalni/id1636196720?l=fr" target="_blank" rel="noreferrer">
            <img className='img5' src={img3} alt="x"></img>
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.transportor.taxi.wassalni" target="_blank" rel="noreferrer">
            <img className='img5' src={img4} alt="x"></img>
          </a>
         </div>

        </main>
        

      <Footer />
    </>
  );
}

export default Telecharger;
