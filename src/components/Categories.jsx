import React from "react";

function Categories() {
  return (
    <div className="container mx-auto mt-7">
      <p className="mx-6 text-lg font-semibold md:mx-auto">Kategoriler</p>
      <div className="flex flex-wrap justify-center px-4 mt-5 gap-y-6 gap-x-4">
        {[
          { name: "Atıştırmalık", img: "https://cdn-image.getir.com/market/category/1407e5ff-c40e-4664-baef-0c2085db0277.png" },
          { name: "Su & İçecek", img: "https://cdn-image.getir.com/market/category/2eeed937-fbed-4a7c-9ba8-5e627970ed8f.png" },
          { name: "Meyve & Sebze", img: "https://cdn-image.getir.com/market/category/5e65d6ee-e0cd-40f6-8829-bba5c179091f.png" },
          { name: "Süt Ürünleri", img: "https://cdn-image.getir.com/market/category/dc761a5c-e285-4b1f-91a8-eecb7e24ecb9.png" },
          { name: "Fırından", img: "https://cdn-image.getir.com/market/category/e97e995a-4e99-492d-ba9e-a96c4d8f2f64.png" },
          { name: "Dondurma", img: "https://cdn-image.getir.com/market/category/905db971-94da-4d6c-bca4-bf4f8b2fb770.png" },
          { name: "Temel Gıda", img: "https://cdn-image.getir.com/market/category/55ba488b-81ee-4e44-8de8-cce9765da6a4.png" },
          { name: "Kahvaltılık", img: "https://cdn-image.getir.com/market/category/7bb3d5e5-87a0-4831-8692-277b73c4a3ef.png" },
          { name: "Yiyecek", img: "https://cdn-image.getir.com/market/category/725afae6-bfeb-480f-b007-283f403cb214.png" },
          { name: "Et, Tavuk & Balık", img: "https://cdn-image.getir.com/market/category/8d797885-b3c3-4bd0-849d-b201082f0aa9.webp" },
          { name: "Fit & Form", img: "https://cdn-image.getir.com/market/category/cc7eb701-f9ae-456d-954c-aa7245713adc.png" },
          { name: "Kişisel Bakım", img: "https://cdn-image.getir.com/market/category/69ee005e-f6ab-4217-b14e-e37116bb1733.png" },
          { name: "Ev Bakım", img: "https://cdn-image.getir.com/market/category/7746c3e3-e760-4a6a-b5ed-fdf0a26bd4af.png" },
          { name: "Ev & Yaşam", img: "https://cdn-image.getir.com/market/category/4ee8cb10-378f-472c-8263-6b6ae4bde2e8.png" },
          { name: "Evcil Hayvan", img: "https://cdn-image.getir.com/market/category/acb25395-8637-4b1b-b298-303162dcc221.png" },
          { name: "Bebek", img: "https://cdn-image.getir.com/market/category/e667fa52-d4cd-468d-a73c-19ac28185fdb.png" },
          { name: "Cinsel Sağlık", img: "https://cdn-image.getir.com/market/category/9c307300-bf01-42f8-9f0c-c63ae3cba398.png" },
        ].map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between w-24 p-2 transition-all rounded-lg cursor-pointer h-36 hover:bg-gray-100 hover:text-primary"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="object-contain w-16 h-16 border border-gray-400 rounded-2xl"
            />
            <p className="mt-2 text-sm font-semibold leading-tight text-center">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
