import React from "react";
import AppStore from "../images/pngwing.com (1).png"
import Android from "../images/pngwing.com.png"

function Information() {
  return (
    
    <div style={{backgroundColor:"#FAFAFA"}} className="pt-16">
      <div className="lg:relative container mx-auto bg-primary lg:w-[1232px] mt-10 lg:h-80 flex lg:items-center text-white lg:rounded-xl pt-14 w-full  ">
      <div className="flex flex-col items-start mx-8">
        <h2 className="text-4xl font-bold">Getir'i İndir!</h2>
        <p className="py-4 font-semibold">
          İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
        </p>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <img src={AppStore} className="w-32 lg:w-44" />
          <img src={Android} className="w-32 lg:w-44" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden md:flex">
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" />
      </div>
    </div>
    </div>
    
  );
}

export default Information;
