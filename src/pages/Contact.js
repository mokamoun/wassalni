import Header from '../comp/header';
import Footer from '../comp/Footer';
// import MainContent from '../comp/MainContent';
// import taxi from '../image/taxi.jpg';
import "../pages/telecharge.css";
// import img3 from '../image/ios.png';
import "../comp/MainAcceuil.css"
import logo from '../image/logo.png';
import "../pages/contact.css"



const Contact = () => {
  return (
    <>
      <Header />

      <div className='blockquiNous'>
        {/* <img src={logo} alt='j'></img>
        <p>Partagez le trajet et le coût avec Amigo, l’unique service de Taxi en Tunisie sous 
          le concept de partage de course avec des services de haute qualité qui répondent à vos besoins.</p> */}
        <section>
              {/* <img src={logo} alt='j'></img>  */}

          <div className="flex">
            <article className="left-section">
              <h3><img src={logo} alt='j'></img></h3>
              <p> Partagez le trajet et le coût avec WASSLNI, l’unique service de Taxi en Tunisie sous 
          le concept de partage de course avec des services de haute qualité qui répondent à vos besoins.
              </p>
              
            </article>

            <article className="right-sectiont">
              {/* <img class="my-img" src="logo" alt=""> */}
                <h6 className='styl'>CONTACT</h6> 
                <p className="para">wassali.express@gmail.com</p>
                <p className="para style">Tel: 50 505 260</p>
                <div >
                <a className="insta" href="https://www.instagram.com/ewassalni/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR0n2B3qRAUcdsP1m8c_gtzbOnsPpmU8Y1__UlLBJnGGEJP4S3il5Igw7eA">Instagram</a>
                <a className="facebook" href="https://www.facebook.com/ewassalni?mibextid=LQQJ4d">facebook</a>
                </div>

            </article>
          </div>

        </section>



      </div>

      <Footer />
    </>
  );
}

export default Contact;
