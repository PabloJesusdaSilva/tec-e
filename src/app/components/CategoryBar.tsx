import { StarIcon } from 'lucide-react';

const CategoryBar = () => {
   return(
      <nav className='py-4 px-8 text-zinc-400 font-semibold border-2 rounded-lg shadow-lg'>
         <ul className='flex space-x-14'>
            <li>   
               Todas as categorias
            </li>
            <li>   
               Supermercado
            </li>
            <li>
               Livros
            </li>
            <li>
               Moda
            </li>
            <li>
               Lançamentos 
            </li>
            <li>
               Oferta do dia
            </li>
            <li className='flex'>
               <StarIcon className='mr-2' />

               Oferta do dia
            </li>
         </ul>
      </nav>
   );
}

export default CategoryBar;