import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg'>
      <div className='relative group overflow-hidden transition-all duration-100'>
        <Link 
          to={`/product/${id}`} 
          className='h-12 w-12 bg-white rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700' 
          aria-label={`View details for ${name}`}
        >
          <FaSearch className='scale-125 hover:rotate-90 hover:scale-150 transition-all duration-200' />
        </Link>
        <img 
          src={image} 
          alt={name} 
          className='w-full block object-cover group-hover:scale-110 transition-all duration-1000' 
        />
      </div>
      <div className='p-4 overflow-hidden'>
        <h4 className='my-1.5 text-lg font-medium text-gray-600 line-clamp-2'>{name}</h4>
        <div className='flex gap-5'>
          <div className='font-bold text-lg'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(new_price)}</div>
          <div className='text-secondary font-bold text-lg line-through'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(old_price)}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
