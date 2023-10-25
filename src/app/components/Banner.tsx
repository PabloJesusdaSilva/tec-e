import Image from "next/image";

import BannerImage from '@/app/assets/banner.jpg';

const Banner = () => {
   return(
      <div className="w-full h-[450px]">
         <Image 
            src={BannerImage}
            alt='Image Banner'
            className='w-full h-full bg-cover'
         />
      </div>
   );
}

export default Banner;