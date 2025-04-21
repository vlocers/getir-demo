import React from "react";

function Card() {
  return (
    <div style={{backgroundColor:"#FAFAFA"}}>
      <div className="lg:w-[1232px] flex justify-between mx-auto gap-x-2 pt-14 lg:flex-row flex-col">
        <div className="flex flex-col items-center justify-between gap-y-10 lg:w-[400px] shadow-2xl p-6 rounded-lg mt-3.5">
          <img
            src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
            alt=""
          />
          <div>
            <p className="text-xl text-center text-primary">Her siparişine bir kampanya</p>
            <p className="text-center mt-2.5 text-gray-500 text-sm">
              Getir’de vereceğin her siparişe uygun bir kampanya bulabilirsin.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-y-10 lg:w-[400px] shadow-2xl p-6 rounded-lg mt-3.5">
          <img
            src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
            alt=""
          />
          <div> 
            <p className="text-xl text-center text-primary">Dakikalar içinde kapında</p>
            <p className="text-center mt-2.5 text-gray-500 text-sm">Getir’le siparişin dakikalar içinde kapına gelir.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-y-10 lg:w-[400px] shadow-2xl p-6 rounded-lg mt-3.5">
          <img
            src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
            alt=""
          />
          <div>
            <p className="text-xl text-center text-primary">Binlerce çeşit mutluluk</p>
            <p className="text-center mt-2.5 text-gray-500 text-sm">Getir’de binlerce çeşit arasından seçimini yapabilirsin.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
