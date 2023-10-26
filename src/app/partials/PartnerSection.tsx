import PartnerCard from '../components/PartnerCard';

import PartnerImage from '@/app/assets/partner.jpg';
import PartnerImage2 from '@/app/assets/partner2.jpg';

const PartnerSection = () => {
   return(
      <section className='flex flex-col space-y-10 md:justify-around md:space-y-0 my-32'>
         <PartnerCard  
            image={PartnerImage}
         />
         <PartnerCard  
            image={PartnerImage2}
         />
   </section>
   );
}

export default PartnerSection;