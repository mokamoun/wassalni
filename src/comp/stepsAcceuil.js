import React from 'react';
import "../comp/stepsAcceuil.css";

const StepsAcceuil = () => {
  return (
    <main className='clssBlock4'>
      <div >
        <div style={{color:"#ffa80f", paddingTop:"30px"}}>LES ETAPES</div>
        <br /> <br /> <br />

        <div class="stepper-wrapper">
          <div class="stepper-item completed">
            <div class="step-counter">1</div>
            <div class="step-name">S'inscrire</div>
          </div>
          <div class="stepper-item completed">
            <div class="step-counter">2</div>
            <div class="step-name">Choisir votre destination</div>
          </div>
          <div class="stepper-item active">
            <div class="step-counter">3</div>
            <div class="step-name">Accepter ma demande de votre taxi</div>
          </div>
        </div>
      </div>
    </main>


  );
}

export default StepsAcceuil;
