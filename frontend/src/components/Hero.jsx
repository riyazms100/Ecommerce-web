import { MdOutlineLocalOffer } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full pb-12'>
      <div className='max_padd_container relative top-32 xs:top-52'>
        <h1 className='h1 capitalize max-w-[37rem]'>Discover Fashion at H&M Online</h1>
        <p className='text-gray-50 regular-16 mt-6 max-w-[33rem]'>
        Welcome to H&M, your ultimate destination for stylish and affordable fashion. Explore our vast collection of clothing, accessories, and home goods for women, men, teenagers, and children. . Shop now and find the perfect pieces to express your style, all from the comfort of your home.
        </p>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 my-10'>
          <div className='flex items-center gap-x-3'>
            <div className='flex'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className='bold-16 sm:bold-20'>
              176k <span className='regular-16 sm:regular-20'>Excellent Reviews</span>
            </div>
          </div>
          <div className='flex flex-col xs:flex-row gap-2'>
            <NavLink to={''} className='btn_dark_rounded flexCenter'>Shop Now</NavLink>
            <NavLink to={''} className='btn_dark_rounded flexCenter gap-x-2'>
              <MdOutlineLocalOffer className='text-2xl' />Offers
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
