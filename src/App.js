import { useState } from "react";

import './App.css';

function App() {
  return (
    <div className="bg-cream w-full h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl mb-2  w-10/12 sm:w-2/5 max-h-max">
        <div className="w-full flex h-[400] xs:block">
          <img
            alt="imge"
            src="/image-product-desktop.jpg"
            className="block object-cover w-2/4 rounded-l-lg xs:hidden"
          ></img>
           <img
            alt="imge"
            src="/image-product-mobile.jpg"
            className="hidden xs:block rounded-t-lg xs:w-full h-[50] object-cover"
          ></img>
          <div className="p-6">
            <p className="uppercase tracking-[0.25em]  text-dark-grayish-blue text-xs">
              Perfume
            </p>

            <h2 className="font-black text-3xl my-4 text-fraunces text-very-dark-blue">
              Gabrielle Essence Eau De Parfum
            </h2>

            <p className="text-dark-grayish-blue mb-4">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex gap-4 items-center">
              <span className="text-3xl text-dark-cyan font-black text-fraunces">
                $149.99
              </span>
              <span className="line-through text-dark-grayish-blue ">$169.99</span>
            </div>

            <button className="bg-dark-cyan flex gap-3 justify-center items-center w-full rounded-lg p-3 mt-4 text-white font-semibold text-sm active:bg-green-900  hover:brightness-[80%] hover:bg-green-900">
              <img src="/icon-cart.svg"></img> Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1 text-[11px]">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="text-attribution-link"  target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#" className="text-attribution-link">Mousy24</a>.
  </div>

    </div>

  );
}

export default App;
