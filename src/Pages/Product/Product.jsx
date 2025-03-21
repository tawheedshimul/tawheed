import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900 mb-8">
          Our Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}