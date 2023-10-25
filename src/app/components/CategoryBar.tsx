import { StarIcon } from 'lucide-react';

const CategoryBar = () => {
   return(
      <article className='flex space-x-14 py-4 px-8 text-zinc-400 font-semibold border-2 rounded-lg shadow-lg'>
         <span>   
            Todas as categorias
         </span>
         <span>   
            Supermercado
         </span>
         <span>
            Livros
         </span>
         <span>
            Moda
         </span>
         <span>
            Lançamentos 
         </span>
         <span>
            Oferta do dia
         </span>
         <div className='flex'>
            <StarIcon />

            Oferta do dia
         </div>
      </article>
   );
}

export default CategoryBar;