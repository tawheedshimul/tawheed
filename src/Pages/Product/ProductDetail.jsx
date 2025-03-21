import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import { ShoppingCart, Package, RefreshCcw, Truck, Minus, Plus } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.products.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading product:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (!product) return <div className="text-center py-12">Product not found</div>;

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === 'increase' ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {/* Product Image */}
          <div className="lg:row-span-2">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <p className="mt-4 text-3xl tracking-tight text-gray-900">${(product.price * quantity).toFixed(2)}</p>
            
            {/* Rating */}
            <div className="mt-4 flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={`h-5 w-5 ${rating < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
              <p className="ml-3 text-sm text-gray-500">{product.reviews} reviews</p>
            </div>

            {/* Description */}
            <p className="mt-6 text-base text-gray-700">{product.description}</p>

            {/* Size Selector */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Select Size</h3>
              <div className="mt-4 grid grid-cols-4 gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`${
                      selectedSize === size ? 'bg-teal-600 text-white' : 'bg-white text-gray-900 ring-1 ring-gray-200'
                    } rounded-md py-3 px-3 text-sm font-medium hover:bg-teal-50`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-6 flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="p-2 border rounded-md hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increase')}
                className="p-2 border rounded-md hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              disabled={!selectedSize}
              className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-8 py-3 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to cart
            </button>

            {/* Features */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Product Features</h3>
              <ul className="mt-4 space-y-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <Package className="w-5 h-5 mr-2 text-teal-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-teal-500 mr-2" />
                  <p className="text-sm text-gray-500">Free shipping on orders over $100</p>
                </div>
                <div className="flex items-center">
                  <RefreshCcw className="w-5 h-5 text-teal-500 mr-2" />
                  <p className="text-sm text-gray-500">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
