import ProductCard from  '../components/ProductCard';

import Product from '@/app/assets/banner.jpg';

const CardSection = () => {
   return(
      <section className='flex-wrap md:flex-nowrap flex justify-center w-full'>
         <ProductCard 
            image={Product}
            title='MacBook Air de 15 polegadas - Meia-noite'
            newPrice='R$ 16.999,00'
            oldPrice='Em até 12x de R$ 1.416,58'
         />
         <ProductCard 
            image={Product}
            title='MacBook Air de 15 polegadas - Meia-noite'
            newPrice='R$ 16.999,00'
            oldPrice='Em até 12x de R$ 1.416,58'
         />
         <ProductCard 
            image={Product}
            title='MacBook Air de 15 polegadas - Meia-noite'
            newPrice='R$ 16.999,00'
            oldPrice='Em até 12x de R$ 1.416,58'
         />
         <ProductCard 
            image={Product}
            title='MacBook Air de 15 polegadas - Meia-noite'
            newPrice='R$ 16.999,00'
            oldPrice='Em até 12x de R$ 1.416,58'
         />
      </section>
   );
}

export default CardSection;