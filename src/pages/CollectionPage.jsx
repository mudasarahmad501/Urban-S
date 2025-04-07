import React, { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';
import ProductGrid from '../components/Products/ProductGrid';
import SortOptions from '../components/Products/SortOptions';

import w1 from '../assets/w1.jpg';
import w2 from '../assets/w2.jpg';
import w3 from '../assets/w3.jpg';
import w4 from '../assets/w4.jpg';
import w5 from '../assets/w5.jpg';
import w6 from '../assets/w6.jpg';
import w7 from '../assets/w7.jpg';
import w8 from '../assets/w8.jpg';

function CollectionPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    gender: [],
    color: [],
    size: [],
    material: [],
    brand: [],
    price: [0, 200],
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const fetchedProducts = [
      { _id: 1, name: "Printed Resort Shirt", price: 29.99, category: "Top Wear", gender: "Men", color: "White", size: "M", material: "Cotton", brand: "Urban thread", popularity: 5, images: [{ img: w1, altText: "w1" }] },
      { _id: 2, name: "Long-Sleeve Thermal Tee", price: 27.99, category: "Top Wear", gender: "Men", color: "Blue", size: "L", material: "Polyester", brand: "Modern fit", popularity: 3, images: [{ img: w2, altText: "w2" }] },
      { _id: 3, name: "Slim-Fit Stretch Shirt", price: 29.99, category: "Top Wear", gender: "Men", color: "White", size: "M", material: "Linen", brand: "Beech breese", popularity: 4, images: [{ img: w3, altText: "w3" }] },
      { _id: 4, name: "Cargo Joggers", price: 45, category: "Bottom", gender: "Men", color: "Grey", size: "L", material: "Fleece", brand: "MTJ", popularity: 2, images: [{ img: w4, altText: "w4" }] },
      { _id: 5, name: "Oversized Shirt", price: 100, category: "Top Wear", gender: "Women", color: "Black", size: "S", material: "Silk", brand: "ALkaram", popularity: 5, images: [{ img: w5, altText: "w5" }] },
      { _id: 6, name: "Maxi Dress", price: 170, category: "Wear", gender: "Women", color: "Red", size: "M", material: "Cotton", brand: "Urban thread", popularity: 4, images: [{ img: w6, altText: "w6" }] },
      { _id: 7, name: "Jacket", price: 140, category: "Top Wear", gender: "Men", color: "Blue", size: "XL", material: "Wool", brand: "Modern fit", popularity: 3, images: [{ img: w7, altText: "w7" }] },
      { _id: 8, name: "Co-Ord Set", price: 200, category: "Wear", gender: "Women", color: "White", size: "S", material: "Silk", brand: "Beech breese", popularity: 5, images: [{ img: w8, altText: "w8" }] },
    ];
    setProducts(fetchedProducts);
  }, []);

  const updateFilter = (type, value) => {
    if (type === 'price') {
      setFilters(prev => ({ ...prev, price: value }));
    } else {
      setFilters(prev => {
        const currentValues = prev[type];
        const newValues = currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value];
        return { ...prev, [type]: newValues };
      });
    }
  };

  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const handleClickOutside = (e) => {
    if (
      isSidebarOpen &&
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const filteredProducts = products.filter(product => {
    const { category, gender, color, size, material, brand, price } = filters;
    return (
      (category.length === 0 || category.includes(product.category)) &&
      (gender.length === 0 || gender.includes(product.gender)) &&
      (color.length === 0 || color.includes(product.color)) &&
      (size.length === 0 || size.includes(product.size)) &&
      (material.length === 0 || material.includes(product.material)) &&
      (brand.length === 0 || brand.includes(product.brand)) &&
      product.price >= price[0] && product.price <= price[1]
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'lowToHigh') return a.price - b.price;
    if (sortBy === 'highToLow') return b.price - a.price;
    if (sortBy === 'popularity') return b.popularity - a.popularity;
    return 0;
  });

  return (
    <div className='flex flex-col lg:flex-row relative'>
      <button
        onClick={toggleSidebar}
        className='lg:hidden p-2 flex justify-center items-center bg-gray-100 shadow-md z-20'
      >
        <FaFilter className='mr-2' /> Filter
      </button>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:block`}
      >
        <FilterSidebar filters={filters} updateFilter={updateFilter} />
      </div>

      <div className='flex-grow p-4'>
        <h2 className='text-2xl uppercase mb-4'>All Collection</h2>
        <SortOptions onSortChange={handleSortChange} />
        <ProductGrid products={sortedProducts} />
      </div>
    </div>
  );
}

export default CollectionPage;
