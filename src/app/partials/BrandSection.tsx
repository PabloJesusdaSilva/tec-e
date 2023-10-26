import BrandCard from "../components/BrandCard";

const BrandSection = () => {
   return(
      <section className='flex flex-col items-center w-full mt-16 mb-20'>
         <div className='flex flex-col items-center mb-16'>
            <h2 className='mb-4 text-5xl text-purple-700 font-bold'>
               Navegue por marcas
            </h2>

            <span className='w-40 h-3 rounded-full bg-purple-700' />
         </div>

         <div className='flex space-x-16'>
            <BrandCard
               title='Apple' 
            />
            <BrandCard
               title='Samsung' 
            />
            <BrandCard
               title='LG' 
            />
            <BrandCard
               title='Xiaomi' 
            />
            <BrandCard
               title='Motorola' 
            />
         </div>
      </section>
   );
}

export default BrandSection;