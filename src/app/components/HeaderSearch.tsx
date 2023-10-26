import {
   HeartIcon,
   UserCircleIcon,
   ShoppingCartIcon,
   SearchIcon
} from 'lucide-react'

const HeaderSearch = () => {
   return(
      <article className='flex flex-col md:flex-row justify-around items-center w-4/5 h-28 py-8'>
         <div className='text-4xl text-zinc-600 uppercase font-bold'>
            Tec-
            <span className='text-purple-700'>e</span>
         </div>

         <div className='md:flex'>
            <input 
               type='text'
               placeholder='O que você está buscando?' 
               className='relative w-[500px] md:w-[800px] py-5 pl-8 rounded-lg tracking-wide font-medium  text-zinc-500 bg-zinc-100'
            />

            <SearchIcon className='relative -top-11 text-zinc-600 md:right-16 md:top-5' />
         </div>

         <div className='hidden md:flex space-x-8'>
            <HeartIcon size={32} className='text-zinc-600' />
            <UserCircleIcon size={32} className='text-zinc-600' />
            <ShoppingCartIcon size={32} className='text-zinc-600' />
         </div>
      </article>
   );
}

export default HeaderSearch;