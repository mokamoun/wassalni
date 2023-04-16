import React from 'react';
import imgIOS from '../image/ios.png';
import imgAndroid from '../image/android.png';
import "../comp/MainAcceuil.css";

const telechargeAcceuil = () => {
  return (
    <>
            <div className="CssBlock2">
         
         <h3>TELECHARGER NOTRE APPLICATION POUR PARTAGER VOTRE TAXI</h3>
         <div style={{display: 'flex'}}>

         <a href="https://apps.apple.com/tn/app/e-wassalni/id1636196720?l=fr" target="_blank" rel="noreferrer">
         <img className="img3Css" src={imgIOS} alt="x"></img>  
         </a>
 
         <a href="https://play.google.com/store/apps/details?id=com.transportor.taxi.wassalni" target="_blank" rel="noreferrer">
         <img className="img3Css" src={imgAndroid} alt="x"></img>  
         </a>
         </div>
         
       </div>
    </>
  );
}

export default telechargeAcceuil;
