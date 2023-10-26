import Image from 'next/image';

import BannerImage from '@/app/assets/banner.jpg';

const Banner = () => {
   return(
      <div className='w-full h-[450px]'>
         <Image 
            src={BannerImage}
            alt='Image Banner'
            className='w-full h-full object-cover'
         />

         <div className='bg-black/60 w-full h-full relative -top-[100%]' />

         <div className='relative z-20 w-full h-full -top-[190%] pl-10 md:pl-36 tracking-wider'>
            <h2 className='mb-10 w-4/5 text-5xl md:w-2/6 md:text-6xl font-bold leading-tight text-zinc-50'>
               Conheça os nossos produtos
            </h2>
            <p className='font-semibold text-4xl text-zinc-100'>
               <span className='text-purple-700 mr-2'>
                  50% off
               </span> 
               nos produtos
            </p>

            <button className='mt-12 py-4 px-8 text-xl rounded-lg tracking-wide font-medium text-zinc-200 bg-purple-700'>
               Ver produtos
            </button>
         </div>
      </div>
   );
}

export default Banner;