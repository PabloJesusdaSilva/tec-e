const ProductBar = () => {
   return(
      <div className="hidden md:flex flex-col items-center w-full my-12">
         <h3 className='text-5xl text-purple-700 font-bold'>
            Produtos Selecionados
         </h3>

         <nav className='mt-12'>
            <ul className='flex space-x-12 text-lg font-semibold tracking-wider rounded-full bg-zinc-100'>
               <li className='py-4 px-8 rounded-full transition-all duration-300 text-zinc-600 hover:text-zinc-200 hover:bg-purple-700'>
                  <span>
                     Celular
                  </span>
               </li>
               <li className='py-4 px-8 rounded-full transition-all duration-300 text-zinc-600 hover:text-zinc-200 hover:bg-purple-700'>
                  <span>
                     Acessórios 
                  </span>
               </li>
               <li className='py-4 px-8 rounded-full transition-all duration-300 text-zinc-600 hover:text-zinc-200 hover:bg-purple-700'>
                  <span>
                     Tablets
                  </span>
               </li>
               <li className='py-4 px-8 rounded-full transition-all duration-300 text-zinc-600 hover:text-zinc-200 hover:bg-purple-700'>
                  <span>
                     Notebooks
                  </span>
               </li>
               <li className='py-4 px-8 rounded-full transition-all duration-300 text-zinc-600 hover:text-zinc-200 hover:bg-purple-700'>
                  <span>
                     TVs
                  </span>
               </li>
               <li className='py-4 px-8 rounded-full transition-all duration-300 text-zinc-600 hover:text-zinc-200 hover:bg-purple-700'>
                  <span>
                     Ver todos
                  </span>
               </li>
            </ul>
         </nav>
      </div>
   );
}

export default ProductBar;