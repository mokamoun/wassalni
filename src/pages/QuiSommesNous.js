import Header from '../comp/header';
import Footer from '../comp/Footer';
// import MainContent from '../comp/MainContent';
import qsn from '../image/quiSommeNous.png';
import "../pages/telecharge.css";




const QuiSommesNous = () => {
  return (
    <>
    <Header />
    <main style={{backgroundColor: '#40acdb'}}>
   <img src={qsn} alt='e' className='CSSquiSon'></img>

    </main>
    <Footer />
  </>
  );
}

export default QuiSommesNous;
