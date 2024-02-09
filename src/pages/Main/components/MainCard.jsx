import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function MainCard({ item }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [iconVisible, setIconVisible] = useState(false);
  const navigate = useNavigate()
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length
    );
  };

  const DetailPage = () => {
    alert(item.id)
    // navigate(`deteil/${item.id}`)
  }
  return (
    <div className='flex flex-col gap-2 items-start'>
      <div
        className='relative overflow-hidden w-80 h-80 rounded-xl'
        onMouseEnter={() => setIconVisible(true)}
        onMouseLeave={() => setIconVisible(false)}
      >
        {item.images.map((image, index) => (
          <img
            onClick={DetailPage}
            key={index}
            className={`absolute w-full h-full transition-transform duration-300 transform ${index === currentImageIndex ? 'opacity-100' : ' bg-'
              }`}
            style={{
              transform: `translateX(${(index - currentImageIndex) * 100}%)`,
            }}
            src={image}
            alt={`slide-${index}`}
          />
        ))}
        <button className=' absolute  text-white text-2xl left-[281px] top-3  font-light'>
          <FaRegHeart className='   ' />
        </button>
        <button
          onClick={prevImage}
          className={`bg-white opacity-80 hover:p-[9px] hover:opacity-90  hover:shadow-md hover:shadow-zinc-300 absolute ${!iconVisible || currentImageIndex === 0 ? 'hidden' : ''
            } top-36 left-[11px] text-white px-2 py-2 cursor-pointer rounded-full`}
        >
          <svg
            className='text-white w-4 h-4 dark:text-gray-800'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 19l-7-7 7-7'
            ></path>
          </svg>
        </button>
        <button
          onClick={nextImage}
          className={`bg-white hover:p-[9px] opacity-80 hover:opacity-90  hover:shadow-md hover:shadow-zinc-300 absolute ${!iconVisible || currentImageIndex === item.images.length - 1
            ? 'hidden'
            : ''
            } left-[275px] top-36 text-white px-2 py-2 rounded-[100%] cursor-pointer`}
        >
          <svg
            className='text-white w-4 h-4 dark:text-gray-800'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            ></path>
          </svg>
        </button>
      </div>
      <div className='flex flex-col gap-1'>
        <h1 className='font-medium font-sans'>{item.title.slice(26)}</h1>
        <h1 className=' text-lg font-semibold'>{item.price} ₹ <span className=' font-normal text-zinc-600 text-[17px]'>ночь</span></h1>
      </div>
    </div>
  );
}

export default MainCard;
