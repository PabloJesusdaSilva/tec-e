const Footer = () => {
   return(
      <footer className='w-full px-4 py-8 md:px-32 bg-zinc-800 tracking-wider'>
         <div className='flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-20 flex-1 pb-8 border-b-2 border-zinc-600'>
            <div className='space-y-4'>
               <h4 className='text-lg text-zinc-300 font-medium'>
                  Sobre nós
               </h4>

               <ul className='text-zinc-500 space-y-3'>
                  <li>
                     <span>
                        Conheça
                     </span>
                  </li>
                  <li>
                     <span>
                        Indicação e desconto
                     </span>
                  </li>
               </ul>
            </div>

            <div className='space-y-4 md:flex-1'>
               <h4 className='text-lg text-zinc-300 font-medium'>
                  Informações úteis
               </h4>

               <ul className='text-zinc-500 space-y-3'>
                  <li>
                     <span>
                        Fale conosco
                     </span>
                  </li>
                  <li>
                     <span>
                        Dúvidas
                     </span>
                  </li>
                  <li>
                     <span>
                        Prazo de entrega
                     </span>
                  </li>
                  <li>
                     <span>
                        Forma de pagamento
                     </span>
                  </li>
                  <li>
                     <span>
                        Política de privacidade
                     </span>
                  </li>
                  <li>
                     <span>
                        Trocas e devoluções
                     </span>
                  </li>
               </ul>
            </div>

            <form className='w-96 md:flex flex-col items-center h-72 py-4 px-8 rounded-lg bg-zinc-200'>
               <div className='text-center mt-2 uppercase'>
                  <span className='text-base text-zinc-600 font-semibold tracking-normal'>
                     Cadastre-se e receba nossas
                  </span>
                  <h5 className='text-xl text-zinc-700 font-bold'>
                     Novidades e promoções
                  </h5>
               </div>

               <p className='mt-5 text-center text-zinc-600 font-medium'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>

               <div className='flex space-x-4 mt-14'>
                  <input 
                     type='text'
                     placeholder='Seu email'
                     className='w-72 h-12 pl-4 rounded-lg' 
                  />
                  <button className='w-16 h-12 rounded-lg text-zinc-200 bg-purple-700'>
                     OK
                  </button>
               </div>
            </form>
         </div>

         <div className='flex justify-center pt-6 text-zinc-500 font-medium tracking-wider'>
            COPYRIGHT © 2019. ALL RIGHTS RESERVED. DEVELOPED BY PABLO SILVA
         </div>
      </footer>
   );
}

export default Footer;