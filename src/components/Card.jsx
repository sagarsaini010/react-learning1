import React from 'react';


const Card = ({product}) => {
  

   return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-64 object-contain p-4"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-gray-700 text-base mb-2">{product.description}</p>
        <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-green-600">${product.price}</span>
          <span className="text-sm text-yellow-500">
            ⭐ {product.rating?.rate} ({product.rating?.count})
          </span>
        </div>
      </div>
    </div>
  );

};

export default Card;