import {
   HeartIcon,
   UserCircleIcon,
   ShoppingCartIcon,
   SearchIcon
} from 'lucide-react'

const HeaderSearch = () => {
   return(
      <article className='flex justify-around items-center w-4/5 h-28 p-5'>
         <div className='text-4xl text-zinc-600 uppercase font-bold'>
            Tec-
            <span className='text-purple-700'>e</span>
         </div>

         <div className='flex'>
            <input 
               type='text'
               placeholder='O que você está buscando?' 
               className='relative w-[800px] py-5 pl-8 rounded-lg tracking-wide font-medium  text-zinc-500 bg-zinc-100'
            />

            <SearchIcon className='relative text-zinc-600 right-16 top-5' />
         </div>

         <div className='flex space-x-8'>
            <HeartIcon size={32} className='text-zinc-600' />
            <UserCircleIcon size={32} className='text-zinc-600' />
            <ShoppingCartIcon size={32} className='text-zinc-600' />
         </div>
      </article>
   );
}

export default HeaderSearch;