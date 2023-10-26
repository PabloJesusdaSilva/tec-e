import Image from 'next/image';

import { HeartIcon} from 'lucide-react';

interface ICard {
   image: any;
   title: string;
   newPrice: string;
   oldPrice: string;
}

const ProductCard = ({
   image,
   title,
   newPrice,
   oldPrice
}: ICard) => {
   return(
      <article className='w-[380px] m-10 shadow-2xl tracking-wider rounded-lg bg-zinc-100'>   
         <Image  
            src={image} 
            alt='Product Image'
            className='rounded-t-lg'
         />

         <div className='mb-4 px-3 pt-5'>
            <div className='flex w-full justify-evenly'>
               <h4 className='w-72 text-xl text-zinc-600 font-semibold'>
                  {title}
               </h4>

               <HeartIcon 
                  size={28}
                  color='#ef4444'
                  className='text-red-500 transition-all duration-300 hover:-translate-y-2'
               />
            </div>

            <div className='flex flex-col mt-5'>
            <span className='text-lg text-green-600 font-semibold'>
               {newPrice}
            </span>

            <span className='mt-1 text-lg text-zinc-500 font-medium'>
               {oldPrice}
            </span>
            </div>
         </div>
      </article>
   );
}

export default ProductCard;