import React from 'react';

function Product() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Product Image */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/500"
              alt="Product"
              className="rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Product Name
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Price */}
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-gray-900">$99.99</span>
              <span className="text-sm text-gray-500 line-through ml-2">$129.99</span>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>

            {/* Additional Info */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Product Details
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>High-quality material</li>
                <li>Available in multiple colors</li>
                <li>1-year warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;