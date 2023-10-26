import Banner from './components/Banner';
import CategoryProduct from './components/CategoryProducts';
import ProductBar from './components/ProductBar';
import BrandSection from './partials/BrandSection';
import CardSection from './partials/CardSection';
import Header from './partials/Header';
import PartnerSection from './partials/PartnerSection';

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Banner />

        <CategoryProduct />

        <ProductBar />

        <CardSection />

        <PartnerSection />

        <BrandSection />
      </main>
    </>
  );
}

export default Home;
