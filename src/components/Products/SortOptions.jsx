import React from 'react';

const SortOptions = ({ onSortChange }) => {
  return (
    <div className='mb-4 flex justify-end '>
      <label htmlFor='sort' className='mr-2 font-semibold'>Sort by:</label>
      <select
        id='sort'
        onChange={(e) => onSortChange(e.target.value)}
        className='border px-2 py-1 rounded'
      >
        <option value=''>Default</option>
        <option value='lowToHigh'>Price: Low to High</option>
        <option value='highToLow'>Price: High to Low</option>
        <option value='popularity'>Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;