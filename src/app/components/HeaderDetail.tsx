import { 
   ShieldCheckIcon,
   TruckIcon,
   CreditCardIcon
} from 'lucide-react';

const HeaderDetail = () => {
   return(
      <article className='flex justify-center space-x-44 w-4/6 p-3 border-b-2 tracking-wider'>
         <div>
            <p className='flex font-semibold text-zinc-400'>
               <ShieldCheckIcon className='mr-2' />
               Compra
               <span className='ml-2 text-purple-700'>
                  100% segura
               </span>
            </p>
         </div>
         <div>
            <p className='flex font-semibold text-zinc-400'>
               <TruckIcon className='mr-2' />

               <span className='mr-2 text-purple-700'>
                  Frete grátis
               </span>
               acima de R$ 200
            </p>
         </div>
         <div>
            <p className='flex font-semibold text-zinc-400'>
               <CreditCardIcon className='mr-2' />

               <span className='mr-2 text-purple-700'>
                  Parcele
               </span>
               suas compras
            </p>
         </div>
      </article>
   );
}

export default HeaderDetail;