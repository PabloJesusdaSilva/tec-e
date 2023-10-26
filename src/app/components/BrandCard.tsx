interface IBrand {
   title: string;
}

const BrandCard = ({ title }: IBrand) => {
   return(
      <div className='flex justify-center items-center w-40 h-40 rounded-full shadow-2xl bg-zinc-100'>
         <span className='text-xl text-zinc-600 font-bold'>
            {title}
         </span>
      </div>   
   );
}

export default BrandCard;