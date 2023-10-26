import { 
   LaptopIcon,
   StoreIcon,
   BeerIcon,
   WrenchIcon,
   DumbbellIcon,
   HeartPulseIcon,
   ShirtIcon
} from 'lucide-react';

const CategoryProduct = () => {
   return(
      <nav className='flex justify-center w-full py-10'>
         <ul className='flex space-x-32'>
            <li className='flex flex-col items-center space-y-4'>
            <LaptopIcon  
               size={45}
               className='text-zinc-500 transition-all duration-300 hover:text-purple-700'
            /
            >
               <span className='text-lg text-zinc-600 font-bold tracking-wider'>
                  Tecnologia
               </span>
            </li>
            <li className='flex flex-col items-center space-y-4'>
               <StoreIcon  
                  size={45}
                  className='text-zinc-500 transition-all duration-300 hover:text-purple-700'
                  /
                  >
               <span className='text-lg text-zinc-600 font-bold tracking-wider'>
                  Mercado
               </span>
            </li>
            <li className='flex flex-col items-center space-y-4'>
               <BeerIcon  
                  size={45}
                  className='text-zinc-500 transition-all duration-300 hover:text-purple-700'
               />

               <span className='text-lg text-zinc-600 font-bold tracking-wider'>
                  Bebidas
               </span>
            </li>
            <li className='flex flex-col items-center space-y-4'>
               <WrenchIcon  
                  size={45}
                  className='text-zinc-500 transition-all duration-300 hover:text-purple-700'
               />

               <span className='text-lg text-zinc-600 font-bold tracking-wider'>
                  Ferramentas
               </span>
            </li>
            <li className='flex flex-col items-center space-y-4'>
               <DumbbellIcon  
                  size={45}
                  className='text-zinc-500 transition-all duration-300 hover:text-purple-700'
               />

               <span className='text-lg text-zinc-600 font-bold tracking-wider'>
                  Esporte
               </span>
            </li>
            <li className='flex flex-col items-center space-y-4'>
               <HeartPulseIcon  
                  size={45}
                  className='text-zinc-500 transition-all duration-300 hover:text-purple-700'
               />

               <span className='text-lg text-zinc-600 font-bold tracking-wider'>
                  Saúde
               </span>
            </li>
            <li className='flex flex-col items-center space-y-4'>
               <ShirtIcon  
                  size={45}
                  className='text-zinc-500 transition-all duration-300 hover:text-purple-700'
               />

               <span className='text-lg text-zinc-600 font-bold tracking-wider'>
                  Moda
               </span>
            </li>
         </ul>
      </nav>
   );
}

export default CategoryProduct;