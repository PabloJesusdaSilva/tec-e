import CategoryBar from '../components/CategoryBar';
import HeaderDetail from '../components/HeaderDetail';
import HeaderShare from '../components/HeaderSearch';

const Header = () => {
   return(
      <header className='flex flex-col items-center'>
         <HeaderDetail />

         <HeaderShare />

         <CategoryBar />
      </header>
   );
}

export default Header;