import Image from 'next/image';

interface IImage {
   image: any
}

const PartnerCard = ({
   image
}: IImage) => {
   return(
      <article className='w-12/12 md:w-5/12 h-80 overflow-hidden rounded-2xl'>
         <Image 
            src={image}
            alt=''
            className='h-full object-cover'
         />

         <div className='relative w-full h-full -top-[100%] bg-black/70' />

         <div className='relative -top-[180%] space-y-4 pl-12 tracking-wider'>
            <h3 className='text-5xl text-zinc-200 font-bold'>
               Parceiros
            </h3>
            <p className='w-96 pb-3 text-lg text-zinc-400 font-medium'>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae expedita animi laudantium. 
            </p>

            <button className='w-52 h-14 text-zinc-200 tracking-widest text-xl font-semibold rounded-md bg-purple-700'>
               Confira
            </button>
         </div>
      </article>
   );
}

export default PartnerCard;