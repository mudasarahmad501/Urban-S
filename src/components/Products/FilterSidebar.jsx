// FilterSidebar.jsx
import React from 'react';

const FilterSidebar = ({ filters, updateFilter }) => {
  const categories = ["Top Wear", "Bottom", "Wear"];
  const genders = ["Men", "Women"];
  const colors = ["Red", "Black", "White", "Blue", "Grey"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Wool", "Polyester", "Silk", "Linen", "Fleece"];
  const brands = ["Urban thread", "Modern fit", "Beech breese", "MTJ", "ALkaram"];

  const renderCheckboxGroup = (title, items, type) => (
    <div className='mb-4'>
      <h3 className='font-bold mb-2'>{title}</h3>
      {items.map(item => (
        <div key={item} className='flex items-center mb-1'>
          <input
            type='checkbox'
            id={`${type}-${item}`}
            checked={filters[type].includes(item)}
            onChange={() => updateFilter(type, item)}
          />
          <label htmlFor={`${type}-${item}`} className='ml-2'>{item}</label>
        </div>
      ))}
    </div>
  );

  return (
    <div className='p-4 overflow-y-auto h-full'>
      {renderCheckboxGroup("Category", categories, "category")}
      {renderCheckboxGroup("Gender", genders, "gender")}

      <div className='mb-4'>
        <h3 className='font-bold mb-2'>Color</h3>
        <div className='flex flex-wrap gap-2'>
          {colors.map(color => (
            <div
              key={color}
              onClick={() => updateFilter("color", color)}
              className={`w-6 h-6 rounded-full border-2 cursor-pointer ${filters.color.includes(color) ? 'border-black' : 'border-gray-300'}`}
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            ></div>
          ))}
        </div>
      </div>

      {renderCheckboxGroup("Size", sizes, "size")}
      {renderCheckboxGroup("Material", materials, "material")}
      {renderCheckboxGroup("Brand", brands, "brand")}

      <div className='mb-4'>
        <h3 className='font-bold mb-2'>Price Range</h3>
        <input
          type='range'
          min='0'
          max='200'
          step='1'
          value={filters.price[1]}
          onChange={(e) => updateFilter('price', [0, parseInt(e.target.value)])}
        />
        <p className='text-sm mt-1'>Up to ${filters.price[1]}</p>
      </div>
    </div>
  );
};

export default FilterSidebar;