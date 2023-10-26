import { StarIcon } from 'lucide-react';

const CategoryBar = () => {
   return(
      <nav className='hidden md:flex py-4 px-8 text-zinc-400 font-semibold border-2 rounded-lg shadow-lg'>
         <ul className='flex space-x-14'>
            <li className='transition-all duration-300 hover:text-purple-700'>   
               Todas as categorias
            </li>
            <li className='transition-all duration-300 hover:text-purple-700'>   
               Supermercado
            </li>
            <li className='transition-all duration-300 hover:text-purple-700'>
               Livros
            </li>
            <li className='transition-all duration-300 hover:text-purple-700'>
               Moda
            </li>
            <li className='transition-all duration-300 hover:text-purple-700'>
               Lançamentos 
            </li>
            <li className='transition-all duration-300 hover:text-purple-700'>
               Oferta do dia
            </li>
            <li className='flex transition-all duration-300 hover:text-purple-700'>
               <StarIcon className='mr-2' />

               Oferta do dia
            </li>
         </ul>
      </nav>
   );
}

export default CategoryBar;