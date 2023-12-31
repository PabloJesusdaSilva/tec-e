import Banner from './components/Banner';
import CategoryProduct from './components/CategoryProducts';
import ProductBar from './components/ProductBar';
import BrandSection from './partials/BrandSection';
import CardSection from './partials/CardSection';
import Footer from './partials/Footer';
import Header from './partials/Header';
import PartnerSection from './partials/PartnerSection';

const Home = () => {
  return (
    <>
      <Header />

      <main className='flex flex-col items-center'>
        <Banner />

        <CategoryProduct />

        <ProductBar />

        <CardSection />

        <PartnerSection />

        <BrandSection />
      </main>

      <Footer />
    </>
  );
}

export default Home;
