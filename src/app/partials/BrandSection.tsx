import BrandCard from "../components/BrandCard";

const BrandSection = () => {
   return(
      <section className='flex flex-col items-center w-full mt-16 mb-20'>
         <div className='flex flex-col items-center mb-16'>
            <h2 className='text-4xl mb-4 md:text-5xl text-purple-700 font-bold'>
               Navegue por marcas
            </h2>

            <span className='w-40 h-3 rounded-full bg-purple-700' />
         </div>

         <div className='flex flex-col space-x-0 space-y-10 md:flex-row md:space-x-16 md:space-y-0'>
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